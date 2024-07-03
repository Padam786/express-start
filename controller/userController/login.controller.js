const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    //get data from body
    const { email, password } = req.body;

    //checkemail exist or not
    const checkEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    //if not exist it will return with message
    if (!checkEmail) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    //check password match or not
    const isPasswordMatch = await bcrypt.compare(password, checkEmail.password);

    //if not match it will return with message 101 error status code 401 Unauthorized  for invalid password
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    //homework : write the rest of the code below

    const accessToken = jwt.sign(
      {
        id: checkEmail.id,
        email: checkEmail.email,
      },
      process.env.SECERET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Login successful",
      accessToken: accessToken,
    });


  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error,
    });
  }
};

module.exports = login;