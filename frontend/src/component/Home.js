import React from 'react';
import ViewOrders from './ViewOrders';
import CreateOrder from './CreateOrder';
import Navbar from './Navbar';
import './Home.css';
import { Link } from 'react-router-dom';
import SlideBar from './SlideBar';



const Home = () => {
  return (
    <div className='mainContainer'>
      
      <h1>Tasty Buds</h1>
      <h2>Order management System</h2>

      <div className="createOrder">
      <Link to="createorder">
      <button type="button" class="btn btn-secondary">Create New Order</button>
      </Link>
      </div>

     

   

        <ViewOrders/>
        <SlideBar/>
        
      
    </div>
  )
}

export default Home
