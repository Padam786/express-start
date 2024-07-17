const express = require("express");
const app = express();
const fs = require("fs");

let users = require("./MOCK_DATA.json");



const port = 3000;



//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
