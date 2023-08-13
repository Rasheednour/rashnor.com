'use client'
import React, {Suspense, useState} from 'react'
import "@styles/globals.css";
import MainCanvas from '@components/MainCanvas';
import ScrollPrompt from '@components/ScrollPrompt';


const Home = () => {
  const [hidePrompt, setHidePrompt] = useState(false)
  return (
    <div className='app w-full h-full' > 
        
        <MainCanvas hidePrompt={hidePrompt} setHidePrompt={setHidePrompt}/>
    </div>
  )
}

export default Home