import React from 'react';
import logo from '../../../assets/Images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>

          <div className="header">  <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <nav>
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>

                </ul>
            </nav>
            </div>
        </div>
    );
};
 
export default Navbar;