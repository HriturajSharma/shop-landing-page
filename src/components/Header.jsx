import React from 'react'
import '../index.css'

function Header() {
  return (
    <div>
        <nav className=' w-[1200px] h-[72px] flex justify-between m-auto items-center  '>
            <div className="logo">
                <img src="/src/assets/brand_logo.png" alt="brand logo" />
            </div>
            <ul className='flex gap-[20px] font-semibold text-slate-800 '>
                <li href="#">Menu</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
                <li href="#">Shop</li>
               
            </ul>
            <button className='bg-red-600 px-5 py-1 rounded-sm text-white'>Sign</button>
        </nav>
    </div>
  )
}

export default Header