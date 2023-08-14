'use client'
import React, {Suspense, useState} from 'react'
import "@styles/globals.css";
import MainCanvas from '@components/MainCanvas';
import UserInterface from '@components/UserInterface';


const Home = () => {
  const [isDaytime, setIsDaytime] = useState(true)
  return (
    <div className='app w-full h-full' > 
        <UserInterface isDaytime={isDaytime} setIsDaytime={setIsDaytime}/>
        <MainCanvas isDaytime={isDaytime}/>
    </div>
  )
}

export default Home