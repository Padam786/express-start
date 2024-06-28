const prisma = require("../../config/prisma");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
  try {

    const {name, email, password,phone} = req.body;
    
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
    //to check password 

    const saveUserData = await prisma.user.create({
          data:{
            name,
            email,
            phone:parseInt(phone),
            password:hasPassword
          }
    })

    const accessToken = jwt.sign({
       id:saveUserData.id,
       email:saveUserData.email,
    },
     process.env.SECERET_KEY,
     {
       expiresIn: "1h",
     }
  )

    res.status(201).json({
      message: "User created successfully",
      data: saveUserData,
      accessToken:accessToken,
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
