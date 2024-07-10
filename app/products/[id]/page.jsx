import Link from "next/link";
import { Rating, RatingStar } from "flowbite-react";
import { Carousel } from "flowbite-react";
const Detail = async({params})=>{
const getdata = async (id)=>{
  try{
    const res= await fetch(`https://dummyjson.com/products/${id}`);
    const data=await res.json();
    return data;
  }catch(error){
    console.log(error)
  }
}

    const data=await getdata(params.id);
    console.log(data);
    return(
<div>
<div  className="tablet:h-500 h-1000 w-full flex-col tablet:flex-row flex flex-wrap justify-evenly">
<div className="h-1/4 tablet:h-full tablet:w-2/5 w-full p-6">
<div className="h-full ">
<Carousel>
{
    data.images.map((c)=>{
        return(
            <img src={c} alt={c} />
        )
    })
}
</Carousel>
</div>
</div>
<div className=" tablet:h-full h-3/4 tablet:w-3/5 w-full p-6">
<div className="flex justify-between ">
<h2 className="font-outfit font-semibold py-1 px-3 bg-Delight text-white rounded-full text-medium">{Math.floor(data.discountPercentage)}%</h2>
<h2 className="font-outfit font-semibold py-1 px-3 bg-black rounded-full text-white text-medium">{data.availabilityStatus}</h2>
</div>

<h2 className="bg-gray-200 border-2 border-gray-400 p-1 text-xs font-semibold my-5 rounded-full w-fit h-fit">{data.brand}</h2>
<h3 className="text-4xl font-semibold m-2 ">{data.title}</h3>
<div>
<Rating>
<RatingStar />
<p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{data.rating}</p>
<span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
<a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
  {data.reviews.length} reviews
</a>
</Rating>
</div>
<h1 className="text-xl font-bold my-3 ">Price: {data.price} $</h1>
<div className="bg-white border-2 flex  border-gray-400 text-xs font-semibold my-5 rounded-full w-fit h-fit">
<h1 className="text-lg px-2 m-1 text-black font-semibold rounded-full hover:bg-gray-300">+</h1>
<h1 className="text-lg px-2 m-1 text-black font-semibold rounded-full">0</h1>
<h1 className="text-lg px-2 m-1 text-black font-semibold rounded-full hover:bg-gray-300">-</h1>
</div>
<div className="flex flex-col justify-center">
<Link href={'/'} style={{width:"300px"}} className="text-2xl text-center  border-2 border-Delight text-Delight font-outfit py-3 my-2 px-8 hover:shadow-md bg-white hover:text-white hover:bg-Delight">Add To Cart</Link>
<Link href={'/'} style={{width:"300px"}} className="text-2xl text-center  text-white font-outfit border-black border-2 hover:border-black py-3 hover:shadow-md hover:text-black my-2 px-8 bg-black hover:bg-white">Buy Now</Link>

</div><br/>
<p className='font-semibold text-medium m-2 '>{data.description}</p>
</div>
</div>
</div>
    )
}
export default Detail