const express = require('express');
const connectDB = require('./Database/connect');
const app = express();
const Order = require('./Routes/Order')
const User = require('./Routes/User');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const cors = require('cors');


//middleware
app.use(express.json());
app.use(cors());




//Routes


app.use('/api/management/order',Order);
app.use('/api/management/user',User);
app.use(notFound);

const port = 8000;


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listning'));
    } catch (error) {
        console.log(error);
    }
}

start()