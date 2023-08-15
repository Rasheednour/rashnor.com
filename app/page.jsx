'use client'
import React, {Suspense, useState} from 'react'
import "@styles/globals.css";
import MainCanvas from '@components/MainCanvas';
import UserInterface from '@components/UserInterface';


const Home = () => {
  const [isDaytime, setIsDaytime] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='app w-screen h-screen' > 
        <UserInterface isDaytime={isDaytime} setIsDaytime={setIsDaytime} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <MainCanvas isDaytime={isDaytime}/>
    </div>
  )
}

export default Home