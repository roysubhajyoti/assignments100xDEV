const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin, Course } = require("../db");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  //check if already exist
  const existAdmin = await Admin.findOne({
    username,
    password,
  });
  if (!existAdmin) {
    await Admin.create({
      username,
      password,
    });
    res.json({
      message: "Admin created successfully",
    });
  } else {
    return res.status(403).send({ msg: "already exist" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isExist = await Admin.findOne({ username, password });
  if (isExist) {
    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Admin already exist or worng username password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  const exitstCourse = await Course.findOne({
    title,
    description,
    price,
    imageLink,
  });
  if (exitstCourse) {
    return res.status(403).json({
      msg: "Course already exist",
    });
  }
  const CourseCreate = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    message: "Course created successfully",
    courseId: CourseCreate._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

module.exports = router;
