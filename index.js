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


//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
