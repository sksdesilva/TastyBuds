const express = require('express');
const connectDB = require('./Database/connect');
const app = express();
const Order = require('./Routes/Order')
require('dotenv').config();
const notFound = require('./middleware/not-found');

//middleware
app.use(express.json());




//Routes


app.use('/api/management/order',Order);
app.use(notFound);

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