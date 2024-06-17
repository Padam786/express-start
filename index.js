const express = require("express");
const app = express();
const fs = require("fs");

let users = require("./MOCK_DATA.json");


let name = "padam"


const port = 3000;

//for json support middlware
app.use(express.json());

//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }));

//express ko app // http method // url //callback funcs req.and response
//get method
app.get("/", (req, res) => {
  res.json(users);
});

//for creating new user using post method
app.post("/", (req, res) => {
  // //get item from cilent / body
  const items = req.body;

  items.id = users.length + 1; // create an id  51
  users.push(items); // push new array in existing item at last

  ///write a new item in file
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log("error ", err);
    } else {
      console.log("file created");
    }
  });

  //send response
  res.status(201).json({
    message: "item added successfully",
  });
});

//for data update , use put method
app.put("/:id", (req, res) => {
  //get id from params/url
  const id = parseInt(req.params.id);

  //check  user id is match with params id
  const indexItem = users.find((item) => item.id === id);

  //if id not match with params id
  if (!indexItem) {
    return res.status(404).json({
      message: "item not found",
    });
  } else {
    users[1]
    //get item from cilent / body and update it to index
    users[indexItem] = { id, ...req.body };

    //write a  item in file
    fs.writeFile("MOCK_DATA.json", JSON.stringify(users), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: "Error writing file" });
      }

      //send response if evrrything is ok
      res.json({
        message: "Item updated successfully",
        data: users[indexItem],
      });
    });
  }
});

//for data delete, use delete method / Homework

app.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const checkUser = users.find(item => item.id === id)
  
  if (!checkUser) {
    return res.status(404).json({
      msg: "User Not Found"
    }) 
  }
  else {
     users.splice(id, 1);
     return res.status(200).json({
      msg: "User Deleted Successfully"
     })

     //filter 
     //users = users.filter(item => item.id!== id)
     //return res.status(200).json({
     //  msg: "User Deleted Successfully"

  }


})

//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
