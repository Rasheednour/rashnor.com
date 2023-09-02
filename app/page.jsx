'use client'
import React, {Suspense, useState} from 'react'
import "@styles/globals.css";
import MainCanvas from '@components/MainCanvas';
import UserInterface from '@components/UserInterface';


const Home = () => {
  const [isDaytime, setIsDaytime] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [exitLandingPage, setExitLandingPage] = useState(false);
  const [scroll, setScroll] = useState(null);
  return (
    <div className='app w-screen h-screen'  > 
        <UserInterface isDaytime={isDaytime} setIsDaytime={setIsDaytime} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} exitLandingPage={exitLandingPage} setExitLandingPage={setExitLandingPage} scroll={scroll}/>
        <MainCanvas isDaytime={isDaytime} setScroll={setScroll}/>
    </div>
  )
}

export default Home