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
    //get from frontend

    //validation

    //database ma save garne

    //send responnse to frontend
  
  } catch (error) {

    //error handle using status 500

  }

})





app.post("/", async (req, res) => {
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
        title: title,
        content: content,
        published: published,
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






//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
