const express = require("express");
const app = express();
const users = require('./MOCK_DATA.json')
const port = 3000;

//for json support middlware
app.use(express.json())


//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }))

//express ko app // http method // url //callback funcs req.and response
//get method
app.get('/' ,(req, res) => {
  res.json(users)
})


//for creating new user using post method
app.post('/', (req, res) => {

  //get item from cilent / body
  const items = req.body;
  items.id = users.length + 1; // create an id 
  users.push(items) // push new array in existing item at last

  //response the status with 201 status code and message to cilent 
  res.status(201).json({
    message: "item added successfully"
  })
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
