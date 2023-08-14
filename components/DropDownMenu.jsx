import React from 'react'
import Link from 'next/link'
const DropDownMenu = ({isMenuOpen}) => {
  return (
    <div
    className={`fixed z-10 h-20 w-screen m-auto  flex flex-row justify-center items-center transition-all duration-300 ease-linear transform ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`} style={{backgroundColor: "#13083f", border: "1px solid white"}}>
        <Link href='/' className='font-montserrat text-xl text-white mr-10 hover:text-indigo-500'> <b>Home</b></Link>
        <Link href='/' className='font-montserrat text-xl text-white mr-10 hover:text-indigo-500'> <b>About</b></Link>
        <Link href='/' className='font-montserrat text-xl text-white mr-10 hover:text-indigo-500'> <b>Projects</b></Link>
        <Link href='/' className='font-montserrat text-xl text-white mr-10 hover:text-indigo-500 '> <b>Contact</b></Link>
    </div>
  )
}

export default DropDownMenu