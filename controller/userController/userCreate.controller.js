const prisma = require("../../config/prisma");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    //create User Homework

    // email    String  @unique
    // name     String?
    // phone    Int
    // password String
    const {name, email, password,phone} = req.body;

    //check email already exists or not in db
    
    const emailCheck = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if (emailCheck) {
       return res.status(400).json({
         message: "email already exists"
       })
    }

    
    const salt =  await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(password, salt) 

    // save to datbase homework




  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
