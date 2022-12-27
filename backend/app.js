const express = require('express');
const app = express();
const Order = require('./Routes/Order')
require('dotenv').config();

//middleware
app.use(express.json());




//Routes
app.get('/' , (req,res)=>
    res.send('Initialize the app'));

app.use('/api/management/order',Order);


const port = 3000;
app.listen(port,()=>console.log('server is listning ' + port));