const express = require('express');
const connectDB = require('./Database/connect');
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


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listning'));
    } catch (error) {
        console.log(error);
    }
}

start()