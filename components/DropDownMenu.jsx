import React from 'react'
import Link from 'next/link'
const DropDownMenu = ({isMenuOpen}) => {
  return (
    <div
    className={` fixed z-10 right-0 h-screen sm:w-1/2 md:w-1/6 flex flex-col justify-top items-center transition-all duration-300 ease-linear transform ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`} style={{backgroundColor: "#13083f", border: "1px solid white"}}>
        <Link href='/' className='font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-24'> <b>Home</b></Link>
        <Link href='/' className='font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-4'> <b>About</b></Link>
        <Link href='/' className='font-montserrat text-2xl text-white mr-10 hover:text-indigo-500 ml-12 mt-4'> <b>Projects</b></Link>
        <Link href='/' className='font-montserrat text-2xl text-white mr-10 hover:text-indigo-500  ml-12 mt-4'> <b>Contact</b></Link>
    </div>
  )
}

export default DropDownMenu