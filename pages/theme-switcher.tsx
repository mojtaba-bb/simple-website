import React from 'react'
import "@/app/globals.css";
import Link from "next/link";

import { RxExit } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
function themeSwitcher() {
  
  return (
    <div className='w-screen min-h-screen flex flex-col bg-white'>
      <div className='h-screen w-screen flex flex-col'>
          <nav className='flex p-3 justify-between items-center'>

          <ul className='flex gap-3  items-center text-sm  text-gray-500 '>
            <li>
              <h1 className='text-red-600 font-bold text-lg'>
                Simple Shop
              </h1>
            </li>
            <li>Home</li>
          </ul>
          <ul className='flex gap-3 text-lg'>
            <li className='text-gray-500'><CiShoppingCart/></li>
            <li className='text-red-600'><RxExit/></li>

          </ul>
        </nav>
        <div className='w-full  flex-1 p-10'>
            <div className='w-full h-full bg-linear-to-br from-slate-300 to-slate-200 rounded-2xl'>

            </div>
        </div>
      </div>

    </div>
  )
}

export default themeSwitcher