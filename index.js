const express = require("express");
const groupRoutes = require("./routes/mainRoute");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
require('dotenv').config();


//for json support middlware

app.use(express.json());

app.use("/storage", express.static("storage"));

//for urlencoded support or object support middlewar
app.use(express.urlencoded({ extended: true }));

groupRoutes(app)

//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
