import React, { useState } from 'react'
import axios from 'axios';
import './CreateOrder.css';

const CreateOrder = () => {
    /*rafce - code snippet*/

const[cusName,setName]=useState("");
const[foodName,setFoodName]=useState("");
const[quntity,setQuntity]=useState("");
const[orderTime,setOrderTime] = useState("");

function clearData(event){
  Array.from(event.target).forEach((e)=>(e.value=""));
}

function generateTime(){
  var time = new Date();
  return time.toLocaleTimeString();
}

function createOrder(event){
    event.preventDefault();

    const order = {
        cusName,
        foodName,
        quntity,
        orderTime
    }
    console.log(order);
    axios.post('http://localhost:8000/api/management/order',order).then(()=>{
        alert("order is submitted");

        clearData(event);

        setName("");
        setFoodName("");
        setQuntity("");
        setOrderTime("");



    }).catch((error)=>{
        alert(error.response.data);
    })
}

  return (
    <div className='container'>
      <h2>Create order</h2>

<form onSubmit={createOrder}>
  <div className="form-group">
    <label for="exampleInputEmail1">Customer Name</label>
    <input type="text" className="form-control" id="cusName" aria-describedby="emailHelp" placeholder="Enter Customer Name" onChange={(event)=>{
        setName(event.target.value)
    }}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Dish Type</label>
    <input type="text" className="form-control" id="foodName" placeholder="Enter Dish type" onChange={(event)=>{
        setFoodName(event.target.value)
    }}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">quntity</label>
    <input type="text" className="form-control" id="quntity" placeholder="Enter Quntity" onChange={(event)=>{
        setQuntity(event.target.value);
    }}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Order time</label>
    <input type="text" className="form-control" id="OrderTime" placeholder="Order Time"  onChange={(event)=>{
        
        setOrderTime(event.target.value);
    }}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      
    </div>
  )
}

export default CreateOrder

