const express = require("express");
const app = express();
const port = 3000;

//for json support middlware
app.use(express.json());

//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }));

//we are making post
// title     String
// content   String?
// published Boolean @default(false)
// user_id Int //1

//To create a new post using post method
app.post("/", (req, res) => {
  const { title, content, published, user_id } = req.body;

  //to be continue tomorrow


});

//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
