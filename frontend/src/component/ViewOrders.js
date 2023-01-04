import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ViewOrder.css';
import { FaEdit} from 'react-icons/fa';
import { FaRegWindowClose} from 'react-icons/fa';
import { Link } from "react-router-dom";


const ViewOrders = (props) =>{

    const [order,setOrder] = useState([]);

    function getOrders(){
        axios.get('http://localhost:8000/api/management/order').then((res)=>{
            console.log(res.data.order);
            setOrder(res.data.order);
        }).catch((error)=>{
            alert(error.response.data);
        })
    }

    useEffect(()=>{
        getOrders();
    },[])



const cancelOrder = (id) =>{
    console.log(id);
    axios.delete(`http://localhost:8000/api/management/order/${id}`).then((res)=>{
        alert("Order cancelled sucesfuly");
        getOrders();
    
    })
    .catch((error)=>{
        alert(error.response.data);
    })
}


    return(
        <div className="tableHolder">
            <div className="tableOrder">
            <div className="row">
               <div className="col-2">
                <p>Order No.</p>
               </div>
               <div className="col-2">
                <p>Customer Name</p>
               </div>
               <div className="col-2">
               <p>Food Name</p>
               </div>
               <div className="col-2">
               <p>No of dishes</p>
               </div>
               <div className="col-2">
               <p>Order Time</p>
               </div>
               </div>

            </div>
      
    
  
        {order.map((val,index)=>{

           
            return(
               <div className="tableOrder" key={index}>
               <div className="row">
               <div className="col-2">
                {index+1}
               </div>
               <div className="col-2">
                {val.cusName}
               </div>
               <div className="col-2">
                {val.foodName}
               </div>
               <div className="col-2">
                {val.quntity}
               </div>
               <div className="col-2">
                {val.orderTime}
               </div>
               <div className="col-2">
                <span className="editicon">
                
                <Link to ={`/updateOrder/${val._id}`}>
                <FaEdit/>
                </Link>
                
                
                </span>
               
                <span className="editicon">
               
                <button className="updatebtn" onClick={()=>cancelOrder(val._id)}>
                <FaRegWindowClose/>
                </button>
                
                </span>
                
               </div>
               </div>
                
                
               
                
                
                    
               
                </div>
            )
          
        })}
  
        
         
        </div>
    )
}
export default ViewOrders;