const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
//for json support middlware

app.use(express.json());

app.use("/storage", express.static("storage"));

//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }));

const prisma = require("./config/prisma");
const upload = require("./middleware/upload");
app.use(router);

//homework for you .

app.post("/user", async (req, res) => {
  try {
    const { email, name, phone } = req.body;
    const saveUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        phone: phone,
      },
    });

    return res.status(201).json({
      message: "user created successfully",
      data: saveUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error,
    });
  }
});


app.post("/post", upload.single("image"), async (req, res) => {
  console.log(req.file.path);
  ///get data from body-manidatory
  try {
    const { title, content, published, user_id } = req.body;

    let image = req.file.path;
    image = image.replace(/\\/g, "/");

    const changePublished = published === "true";
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
        published: changePublished,
        image: image,
        user_id: parseInt(user_id),
      },
    });

    return res.status(201).json({
      message: "Post saved successfully",
      data: saveData,
    });
  } catch (error) {
    console.log(error); ///debuging
    return res.status(500).json({
      message: " Sever error",
      error: error,
    });
  }
});

app.put("/post/:id", async (req, res) => {
  try {
    //get id req.params
    const { id } = req.params;
    //get data from frontend
    const { title, content, published, user_id } = req.body;

    const changePublished = published === "true";

    const updatePost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
        published: changePublished,
        image: "image",
        user_id: parseInt(user_id),
      },
    });

    return res.status(200).json({
      message: "Post updated successfully",
      data: updatePost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sever error",
      error: error,
    });
  }
});

app.get("/post", async (req, res) => {
  console.log(req.body);
  try {
    const data = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    return res.status(200).json({
      message: "Post fetched successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sever error",
      error: error,
    });
  }
});


//homework /// delete the post , take  reference from update and method should be delete where id === id 
app.delete("/post/:id", async (req, res) => {
   try {
        const {id} =req.params;

        //check post available or not 

        const checkPost = await prisma.post.findFirst({
          where:{
            id:parseInt(id)
          }
        })

        if(!checkPost){
           return res.status(404).json({
            message:"Post not found"
          })
        }

        const deletePost = await prisma.post.delete({
          where:{
            id:parseInt(id)
          }
        })

        return res.status(200).json({
          message:"Post deleted successfully",
          data:deletePost
        })

    
   } catch (error) {
    return res.status(500).json({
       message: "Server Error",
       error:error
    })
    
   }

});



//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
