
import React from 'react'
import Link from 'next/link'
import { Button } from 'flowbite-react'
import Data from './products/page.jsx'
import './globals.css'
import { Carousel } from "flowbite-react";

const page = () => {
 
  return (
   <div>
   <div className="h-500">
   <Carousel>
     <img src="./slider/1.png" alt="..." />
     <img src="./slider/2.png" alt="..." />
     <img src="./slider/3.png" alt="..." />
 
   </Carousel>
 </div>

 <div className="p-5 m-2 ">
 <h1 className='text-2xl font-bold text-gray-600 text-center  before:w-10 relative before:absolute before:text-center before:mt-10 before:mr-5   before:border-2 before:border-red-700'>Why Shop with Us</h1>
 <div className='py-3 px-2 my-3 flex flex-wrap justify-center '>
  <img src="./fast.png" className=' m-2' style={{height:"300px"}} alt="Why shop with US" />
 <img src="./2.png"  className=' m-2' style={{height:"300px"}} alt="Why shop with US" />
  <img src="./3.png" className=' m-2' style={{height:"300px"}}  alt="Why shop with US" />
 </div>
 </div>
<div className='bg-gray-300  flex flex-col tablet:flex-row'>
<div className="h-100 tablet:w-1/2 w-full pt-3 text-center  flex justify-center">
<img src='./boy.png' style={{height:"450px"}}/>
</div>
<div className="w-full tablet:w-1/2 text-start py-5 flex flex-col">
<h1 className='text-4xl p-5 text-blue-900  font-bold font-outfit '>#New Arrivals</h1>
<p className='p-3 text-gray-700 text-sm font-semibold  font-outfit'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, impedit. Dolore accusantium repellendus cum alias, tempora nobis facilis vero quae magni perferendis labore at natus neque ea rerum fuga ad corrupti. Animi ipsum laudantium explicabo assumenda iste dolorem quod suscipit. Velit repudiandae nam, ad deserunt laboriosam magnam, placeat ex veritatis numquam non architecto error! Temporibus unde quam blanditiis quaerat, alias, voluptas autem eaque quas tempore provident quo aspernatur, mollitia laborum consectetur fugiat? Ex, sapiente commodi itaque odio voluptatem dicta, vero possimus minus, eius eum veritatis! Odio molestiae sint nulla deleniti, nihil animi voluptates voluptate, nesciunt nostrum debitis, porro vitae cupiditate?</p>
<button className='bg-Delight w-fit hover:bg-black p-3 m-2 font-medium text-white'>Shop Now</button>
</div>
</div>
<div className='py-10'>
<h1 className='text-6xl font-bold text-gray-600 text-center  before:w-10 relative before:absolute before:text-center before:mt-16 before:mr-5   before:border-2 before:border-red-700'>Our <span className='text-red-700'>Products</span></h1>
<div>
<Data/>
</div>
<div className='flex justify-center'>
<Link href='/' className='text-center p-3 font-semibold font-outfit text-2xl bg-Delight text-white hover:bg-black'>View All</Link>
</div>
</div>
<div className='p-10 bg-gray-300 subscribe flex flex-col items-center'>

<h1 className='text-4xl text-blue-900 pt-6 text-center font-semibold font-outfit'>Subscribe To Get Discount Offers</h1>
<p className='text-xl text-gray-900 m-5 font-light text-center font-outfit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
<input type='email' className='rounded-full  border-0 p-3 placeholder:p-5 m-3 outline-2 outline-red-700' style={{width:"300px",padding:"10px"}} placeholder='Enter your email.....'/><br/>
<button className='font-outfit text-xl px-5 py-3  w-fit bg-red-400 rounded-full text-white'>Subscribe</button>


</div>
<div>


</div>
   </div>
  )
}

export default page
