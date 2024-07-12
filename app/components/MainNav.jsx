"use client";
import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Navbar } from "flowbite-react";
import {useSelector} from 'react-redux'
const MainNav = () => {
  const item =useSelector((state)=>state.cart)
  return (
    <>
      <div
        id="searchbox"
        className="p-10  h-50 w-100 z-20 flex justify-center bg-white fixed top-0 "
        style={{ width: "100%", display: "none" }}
      >
        <div>
          <CloseIcon
            className="text-gray-400 hover:text-Delight"
            onClick={() =>
              (document.getElementById("searchbox").style.display = "none")
            }
          />
          <div className="flex justify-center">
            <div className="border-2 w-fit border-gray-300">
              <input
                type="text"
                placeholder="Search Here......"
                className="border-0 outline-0"
              />
              <button className="bg-gray-300 text-gray-600 border-0 p-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
<div id='cart' className='h-full hidden fixed top-0 right-0 w-full tablet:w-1/4 bg-white z-30 p-3'>
<h1 onClick={()=>{document.getElementById('cart').style.display='none'}} className='cursor-pointer  px-3 py-1 my-2 text-xl text-Delight font-bold rounded-full w-fit hover:bg-gray-300'>x</h1>
<h1 className='text-4xl text-black font-semibold '>Cart</h1>
<div className='h-3/4 w-full bg-gray-300'>
Shahwar
</div>
<button  className='px-10 py-2 bg-black text-white my-2  cursor-pointer'>Checkout</button>
</div>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href={"/"}>
          <img
            src="/logo.png"
            className="m-3 md:m-auto h-5 sm:h-9"
            alt="Cartez Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
        <div className='flex'>
        <SearchIcon
        onClick={() =>
          (document.getElementById("searchbox").style.display = "block")
        }
        className="my-6 hover:text-Delight mx-2 "
      />
      <div className=''>
      <h1 onClick={()=>{document.getElementById('cart').style.display='block'}} className='my-4 mx-2 p-2 cursor-pointer w-fit font-outfit relative'>Cart<p className='absolute px-1 text-xs  right-0 top-0 bg-red-600 text-white rounded-full'>{item.lenght>0?item.lenght:0}</p></h1>

      </div>
                   </div>
        <Navbar.Toggle />
      </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className=" my-4 mx-0 font-outfit">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} className=" my-4 mx-0 font-outfit" href="#">
            All Products
          </Navbar.Link>
          <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">
            Mens
          </Navbar.Link>
          <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">
            Womens
          </Navbar.Link>
          <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">
            Blogs
          </Navbar.Link>
          <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">
            Contact
          </Navbar.Link>

          <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">
          <h1 className="my-4 mx-0 font-outfit">Login</h1>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNav
