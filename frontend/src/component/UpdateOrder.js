import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UpdateOrder.css';

const UpdateOrder = () => {
    /*rafce - code snippet*/

const[id,setId]=useState("");   
const[cusName,setName]=useState("");
const[foodName,setFoodName]=useState("");
const[quntity,setQuntity]=useState("");
const[orderTime,setOrderTime] = useState("");




function createOrder(event){
    event.preventDefault();

    const order = {
        cusName,
        foodName,
        quntity,
        orderTime
    }
    console.log(order);
    axios.patch(`http://localhost:8000/api/management/order/${id}`,order).then(()=>{
        alert("order is submitted");


    }).catch((error)=>{
        alert(error.response.data);
    })
}

useEffect(()=>{
  setId(localStorage.getItem(`Id`));
  setName(localStorage.getItem(`name`));
  setFoodName(localStorage.getItem(`food`));
  setQuntity(localStorage.getItem(`quntity`));
  setOrderTime(localStorage.getItem(`time`));
},[])

  return (
    <div className='container'>
      <h2>Update Order</h2>

<form onSubmit={createOrder}>
  <div className="form-group">
    <label for="exampleInputEmail1">Customer Name</label>
    <input type="text" className="form-control" value={cusName} id="cusName" aria-describedby="emailHelp" placeholder="Enter Customer Name" onChange={(event)=>{
        setName(event.target.value)
    }}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Dish Type</label>
    <input type="text" className="form-control" value={foodName} id="foodName" placeholder="Enter Dish type" onChange={(event)=>{
        setFoodName(event.target.value)
    }}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">quntity</label>
    <input type="text" className="form-control" value={quntity} id="quntity" placeholder="Enter Quntity" onChange={(event)=>{
        setQuntity(event.target.value);
    }}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Order time</label>
    <input type="text" className="form-control" value={orderTime} id="OrderTime" placeholder="Order Time" onChange={(event)=>{
        
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
  export default UpdateOrder;