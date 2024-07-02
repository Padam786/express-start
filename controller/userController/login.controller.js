const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt")
const login = async (req, res) => {
  try {
    //get data from body 
    const { email, password, } = req.body;


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
    const isPasswordMatch  = await bcrypt.compare(password, checkEmail.password );
    
    
    //if not match it will return with message 101 error status code 401 Unauthorized  for invalid password
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    //homework : write the rest of the code below  




  } catch (error) {


  }
};
