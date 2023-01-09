

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ViewOrders from './component/ViewOrders';
import CreateOrder from './component/CreateOrder';
import Home from './component/Home';
import UpdateOrder from './component/UpdateOrder';
import Navbar from './component/Navbar';
import './App.css';



const App = () =>{


     return(

        <>

         
        
       <BrowserRouter>
       <Routes>
        

       <Route path="/" element={<Home/>}/>
        <Route path="/createorder" element={<CreateOrder/>}/>
        <Route path="/updateOrder" element={<UpdateOrder/>}/>
        
       
        </Routes>
        </BrowserRouter>
      
        </>
    );
}
export default App;