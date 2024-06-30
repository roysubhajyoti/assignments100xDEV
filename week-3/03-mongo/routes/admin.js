const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

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
  const response = await Course.find({});
  res.json({
    response,
  });
});

module.exports = router;
