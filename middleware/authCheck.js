const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  } else {
    const token = accessToken.split(" ")[1];
    const verifyToken = jwt.verify(token, process.env.SECERET_KEY);


    if (!verifyToken) {
      return res.status(403).json({
        message: "Access denied. Invalid token.",
      });
    }
    req.user = verifyToken;
    next();

  }

  console.log(accessToken);
};

module.exports = authCheck;
