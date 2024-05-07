const express = require('express');
const app = express();
const rout = require("./routes/router");

app.use("/api", rout)

app.listen(8080, ()=>{
    console.log("server is runinng");
})
