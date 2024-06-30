const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function userMiddleware(req, res, next) {
  const jwttoken = req.headers.authorization;
  const word = jwttoken.split(" ");
  const token = word[1];
  try {
    const decodedtoken = jwt.verify(token, JWT_SECRET);
    if (decodedtoken.username) {
      //data parsing to next callback
      req.username = decodedtoken.username;
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

module.exports = userMiddleware;
