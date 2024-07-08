
import Link from "next/link";
import '../globals.css'
const getdata= async()=>{
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

      return data3;
}
catch(error){
    console.log(error)
}
}
const Data= async()=>{
const list=await getdata();


    return(
        <div className="p-3 m-2 flex flex-wrap justify-evenly">
{ list &&  list.slice(0,9).map((c)=>{
        return(
            <div className="hover:shadow-md m-3 overflow-hidden relative main-card" key={c.id} style={{height:'400px',width:"350px"}}>
            <div className='card-hover'>
            <Link href={`/`} className='p-3 mb-3 mt-10 bg-red-500 text-xl font-outfit text-white hover:bg-trans hover:text-red-500 border-2 border-red-500'>Add to Cart</Link>
            <Link href={`/products/${c.id}`} className='p-3 m-3 bg-gray-700 text-xl font-outfit text-white hover:bg-trans hover:text-gray-700 border-2 border-gray-700'>Buy Now</Link>
            </div>
            <div className="flex justify-center">
            <img  id='card-img'  src={c.thumbnail}/>
            </div>
            <div className="flex justify-evenly">
            <div>
            <h4 id='card-title' className='font-outfit'>{c.title}</h4>
            <h6 className="font-outfit">{c.rating}⭐⭐⭐⭐⭐</h6>
            </div>
            <h3 className="font-outfit">{c.price}$</h3>
            </div>
            </div>
        )
    })
}
        </div>
    )
}
export default Data