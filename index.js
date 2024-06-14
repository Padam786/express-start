const express = require("express");
const app = express();
const fs = require("fs");

const users = require("./MOCK_DATA.json");

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
app.post("/:id", (req, res) => {
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
  const index = users.findIndex((item) => item.id === id);

  //if id not match with params id
  if (!index) {
    return res.status(404).json({
      message: "item not found",
    });
  }

  //get item from cilent / body and update it to index
  users[index] = { id, ...req.body };

  //write a  item in file
  fs.writeFile("MOCK_DATA.json", JSON.stringify(users, null, 2), (writeErr) => {
    if (writeErr) {
      return res.status(500).json({ message: "Error writing file" });
    }

    //send response if evrrything is ok
    res.json({
      message: "Item updated successfully",
      data: users[index],
    });
  });
});

//for data delete, use delete method / Homework 






//listening port 

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
