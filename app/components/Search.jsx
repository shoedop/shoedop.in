import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search =() =>{
    return(
        <div className="bg-[#E6E6E6] w-75 h-10 rounded-md flex items-center px-3 text-black">
            <input type='text' className='w-full h-full outline-none border-0' placeholder='Search for products...'/>
            <button className='w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 transition'><IoSearchOutline size={25}/></button>
        </div>

    )
}

export default Search