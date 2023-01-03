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
        <>
        {order.map((val,index)=>{
            return(
                <div key={index}>
                    <h1>{val.cusName}</h1>
                </div>
            )
        })}
        </>
    )
}
export default ViewOrders;