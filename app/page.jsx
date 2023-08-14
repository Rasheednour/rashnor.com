'use client'
import React, {Suspense, useState} from 'react'
import "@styles/globals.css";
import MainCanvas from '@components/MainCanvas';
import UserInterface from '@components/UserInterface';


const Home = () => {
  const [isDaytime, setIsDaytime] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='app w-full h-full' > 
        <UserInterface isDaytime={isDaytime} setIsDaytime={setIsDaytime} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <MainCanvas isDaytime={isDaytime}/>
    </div>
  )
}

export default Home