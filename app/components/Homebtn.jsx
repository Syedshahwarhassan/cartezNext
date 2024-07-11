'use client'
import {Link} from 'next/link'
import '../globals.css'
const Homebtn=()=>{
    return(
        <div className='carding'>
            <button   className='p-3 mb-3 mt-10 bg-red-500 text-xl font-outfit text-white hover:bg-trans w-fit hover:text-red-500 border-2 border-red-500'>Add to Cart</button>
            <Link href={`/`} className='p-3 m-3 bg-gray-700 text-xl font-outfit text-white hover:bg-trans w-fit hover:text-white border-2 border-gray-700 hover:border-white'>Buy Now</Link>
            </div>
    )
}

export default Homebtn;