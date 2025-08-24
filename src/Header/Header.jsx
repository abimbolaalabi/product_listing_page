import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">MyStore</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="cart_section">
                < FaShoppingCart />
                <div className="cartCount">1</div>
            </div>
            <div className="menu">
                <IoIosMenu />
            </div>
        </nav>
    );
};

export default Navbar;
