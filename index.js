const express = require("express");
const app = express();
const port = 3000;
//for json support middlware
app.use(express.json());

//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }));

const prisma = require("./config/prisma");




//homework for you . 

app.post("/user", async(req,res)=>{
  try {

    // email String  @unique
    // name  String?
    // phone  Int
    //get data from frontend
    const {email, name, phone} = req.body;
    //send responnse to frontend

    const saveUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        phone: phone,
      }
    })

    return res.status(201).json({
      message: "user created successfully",
      data: saveUser,
    })
 
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error,
    })

  }

})





app.post("/post", async (req, res) => {
  ///get data from body-manidatory
  try {
    const { title, content, published, user_id } = req.body;

    //validation /optional

    if (!title) {
      return res.status(404).json({
        message: "Invalid title",
      });
    }

    //to save data in database
    const saveData = await prisma.post.create({
      data: {
        title,
        content,
        published,
        user_id: parseInt(user_id),
      },
    });

    return res.status(201).json({
      message: "Post saved successfully",
      data: saveData,
    });
  } catch (error) {
    console.log(error) ///debuging 
    return res.status(500).json({
      message: " Sever error",
      error: error,
    });
  }
});


app.put('/post/:id', async(req,res)=>{
    try {
      //get id req.params
      //get data from frontend
      //save data to user to id  method update use / where

      //return response

    } catch (error) {

      //return error
      
    }
}) 








app.get('/post', async(req,res)=> {
try {
    const data = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    return res.status(200).json({
      message: "Post fetched successfully",
      data: data,
    })
} catch (error) {
    return res.status(500).json({
      message: "Sever error",
      error: error,
    })
}})



//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
