import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CgMenu, CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-options">
      <input type="checkbox" id="check" />
      <label for="check" className="menu-btn">
        <CgMenu />
      </label>

      <label className="logo">Shopping</label>

      <ul>
        <li className="heading">Shopping</li>
        <li>
          <Link to="" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="" className="link">
            Products
          </Link>
        </li>
        <li>
          <Link to="" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="" className="link">
            Contacts
          </Link>
        </li>
      </ul>
      </div>

      <div className="icon-wrapper">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search here..."
          ></input>
          <label for="search">
            <BiSearch className="search-icon" />
          </label>
        </div>
        <div className="icon">
          <CgProfile className="profile-icon" />
          <IoMdCart className="cart-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
