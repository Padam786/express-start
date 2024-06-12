const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    //resources
    response.json({
        message: "hello worl"
    })
})
const port = 3000;

app.listen(port ,()=>{
    console.log(`server is running on port ${port}`)
})
