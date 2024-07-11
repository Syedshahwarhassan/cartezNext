'use client'
import Link from "next/link";
import { Rating, RatingStar } from "flowbite-react";
import {useState , useEffect} from  'react'
import '../globals.css'

export default  function Data(){
    // const dispatch=useDispatch();


    useEffect(() =>{
      const getdata=async()=>{
        try{
            const [response,response2]=await Promise.all([
                fetch('https://dummyjson.com/products/category/mens-shirts'),
                fetch('https://dummyjson.com/products/category/womens-dresses'),
            ]);
            if (!response.ok || !response2.ok) {
                throw new Error('Failed to fetch data from one or both APIs');
              }
              const data1 = await response.json();
              const data2 = await response2.json();
            const data3=[...data1.products,...data2.products]
              console.log("Working")
        setList(data3)
              return data3;
        }
        catch(error){
            console.log(error)
        }
      }
      getdata();
        },[]);
const [list,setList]=useState();
const [hoverimg,setHoverimg]=useState(null);
const changeimg=(c)=>{
    document.getElementById('card-img').src=c[1];
    console.log('Change Image')
}

    return(
        <div className="p-3 m-2 flex flex-wrap justify-evenly">
{ list &&  list.slice(0,9).map((c)=>{

    return(
            <div  className="hover:shadow-md m-3 overflow-hidden relative main-card" key={c.id} style={{height:'400px',width:"350px"}}>
           
            <div className="flex justify-center">
           <Link href={`/products/${c.id}`}> <img  id='card-img' src={hoverimg===c.id?c.images[3]:c.thumbnail} onMouseEnter={()=>{setHoverimg(c.id)}} onMouseLeave={()=>{setHoverimg(null)}} /></Link>
            </div>
            <div className="flex justify-evenly">
            <div>
            <h4 id='card-title' className='font-outfit font-semibold'>{c.title}</h4>
            <h6 className="font-outfit font-semibold">
            <Rating>
            <RatingStar />
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{c.rating}</p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              {c.reviews.length} reviews
            </a>
          </Rating>
            </h6>
            </div>
            <h3 className="font-outfit font-semibold">{c.price}$</h3>
            </div>
            </div>
        )
    })
}
        </div>
    )
}
