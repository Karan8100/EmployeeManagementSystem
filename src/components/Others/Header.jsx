import { useState } from 'react'
import React from 'react'
function Header() {
    
  
    return (
      <>
        <div className='flex items-center justify-between '>
            <h1 className=' text-2xl'>Hello,<span className='text-2xl font-bold'> Karan ji</span></h1>
            <button className='bg-red-500 font-medium text-xl rounded-sm px-4 py-3 hover:bg-red-600'>log out</button>
        </div>
        
      </>
    )
  }
  
  export default Header