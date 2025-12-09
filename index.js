require("dotenv").config();
const express = require('express');
const port = 4000;
const app = express();

app.get('/',(req,res)=> {
    res.send("iftekher mahmud pervez")
})


app.listen(port,() => {
    console.log('server listening http://localhost:'+ port)
})