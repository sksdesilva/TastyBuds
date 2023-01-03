import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ViewOrder.css';

const ViewOrders = () =>{

    const [order,setOrder] = useState([]);

    useEffect(()=>{
        function getOrders(){
            axios.get('http://localhost:8000/api/management/order').then((res)=>{
                console.log(res.data.order);
                setOrder(res.data.order);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        getOrders();
    },[])

    return(
        <div className="tableHolder">
            <div className="tableOrder">
            <div className="row">
               <div className="col-3">
                <p>Order No.</p>
               </div>
               <div className="col-3">
               <p>Order No.</p>
               </div>
               <div className="col-3">
               <p>Order No.</p>
               </div>
               <div className="col-3">
               <p>Order No.</p>
               </div>
               </div>

            </div>
      
    
  
        {order.map((val,index)=>{

           
            return(
               <div className="tableOrder" key={index}>
               <div className="row">
               <div className="col-3">
                {val.cusName}
               </div>
               <div className="col-3">
                {val.foodName}
               </div>
               <div className="col-3">
                {val.quntity}
               </div>
               <div className="col-3">
                {val.orderTime}
               </div>
               {/* {val.foodName}
               {val.quntity}
               {val.orderTime} */}
               </div>
                
                
               
                
                
                    
               
                </div>
            )
          
        })}
  
        
         
        </div>
    )
}
export default ViewOrders;