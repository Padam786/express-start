const express = require("express");
const groupRoutes = require("./routes/mainRoute");
const app = express();
const cors = require("cors");
const port = 3000;

//listening port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
