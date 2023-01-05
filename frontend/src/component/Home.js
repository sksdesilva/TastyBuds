import React from 'react';
import ViewOrders from './ViewOrders';
import CreateOrder from './CreateOrder';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Tasty Buds</h1>
      <h2>Order management System</h2>

      <div className="createOrder">
      <Link to="createorder">
      <button type="button" class="btn btn-secondary">Create New Order</button>
      </Link>
      </div>

      <h3 id="subheading">Order List</h3>

        <ViewOrders/>
        
      
    </div>
  )
}

export default Home
