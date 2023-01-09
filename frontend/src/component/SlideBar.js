import React from 'react'
import './SlideBar.css';

const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle");





function SlideBar() {
  return (
    
        <nav className='sidebar'>
            <header>
                <div class='image-text'>
                    <span className='image'>
                        <img src='https://cdn2.vectorstock.com/i/1000x1000/36/16/gold-sd-letter-logo-design-sd-logo-design-sd-logo-vector-37403616.jpg/logo512.png' alt="logo"></img>
                    </span>
                    <div className='text header-text'>
                        <span className='order'>TastyBuds</span>
                        <span className='Inventory'>Management System </span>
                    </div>
                </div>
                <i className='bx bx-chevron-right toggle'></i>
            </header>

            <div className='menu-bar'>
                <div className="menu">
                <ul className='menu-link'>
                <li className='search-box'>    
                            <i class='bx bx-search icon'></i>
                            <input type="search" placeholder='serach'></input>
                            
                        </li>
                        </ul>
                    <ul className='menu-link'>
                        <li className='nav-link'>
                            <a href='#'>
                            <i class='bx bxs-bowl-hot icon'></i>
                            <span className='text nav-text'>Orders</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href='#'>
                            <i class='bx bxl-kickstarter icon' ></i>
                            <span className='text nav-text'>Kitchen</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href='#'>
                            <i class='bx bx-store-alt icon' ></i>
                            <span className='text nav-text'>Inventory</span>
                            </a>
                        </li>
                        <li className='nav-link'>
                            <a href='#'>
                            <i class='bx bxs-credit-card-front icon' ></i>
                            <span className='text nav-text'>cashier</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className='bottom-content'>
                <ul className='menu-link'>
                <li className='nav-link'>
                            <a href='#'>
                            <i class='bx bx-log-out icon'></i>
                            <span className='text nav-text'>Logout</span>
                            </a>
                        </li>
                        </ul>

                </div>
            </div>
        </nav>
      
    
  )
}

export default SlideBar
