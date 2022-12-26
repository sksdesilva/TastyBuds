const express = require('express');
const app = express();
require('dotenv').config()

app.get('/' , (req,res)=>
    res.send('Initialize the app'));


const port = 3000;
app.listen(port,()=>console.log('server is listning ' + port));