'use client'
import Link from 'next/link'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { Navbar } from "flowbite-react";
const MainNav = () => {
  return (
    <div>
      <div id='searchbox' className='p-10  h-50 w-100 z-20 flex justify-center bg-white fixed top-0 ' style={{width:"100%",display:"none"}}>
 <div>
 <CloseIcon className='text-gray-400 hover:text-Delight' onClick={()=>document.getElementById('searchbox').style.display='none'}/>
<div className='flex justify-center'>
<div className='border-2 w-fit border-gray-300'>


<input type='text' placeholder='Search Here......' className='border-0 outline-0'/>
<button className='bg-gray-300 text-gray-600 border-0 p-2'>Search</button>
</div>
</div>
 </div>
      </div>

      <Navbar fluid rounded>
      <Navbar.Brand as={Link} href={'/'}>
        <img src="/logo.png" className="m-3  h-6 sm:h-9" alt="Flowbite React Logo" />
        
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className=' my-4 mx-0 font-outfit' >
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} className=" my-4 mx-0 font-outfit" href="#">
        All Products
        </Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">Mens</Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">Womens</Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">Blogs</Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#">Contact</Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#"><SearchIcon onClick={()=>document.getElementById("searchbox").style.display='block'} className='mx-3 hover:text-Delight  '/></Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#"><ShoppingCartIcon  className=' hover:text-Delight '/></Navbar.Link>
        <Navbar.Link className=" my-4 mx-0 font-outfit" href="#"><PersonIcon className=' hover:text-Delight  '/></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    </div>
  )
}

export default MainNav
