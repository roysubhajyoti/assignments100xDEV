// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function adminMiddleware(req, res, next) {
  const jwttoken = req.headers.authorization;
  const word = jwttoken.split(" ");
  const token = word[1];
  try {
    const decodedtoken = jwt.verify(token, JWT_SECRET);
    if (decodedtoken.username) {
      next();
    } else {
      res.status(403).json({
        msg: "not authorized",
      });
    }
  } catch (e) {
    res.json({
      msg: "incorrect Credentials",
    });
  }
}

module.exports = adminMiddleware;
