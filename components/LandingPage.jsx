"use client"
export default function LandingPage({ setExitLandingPage }) {
  
  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center absolute z-50">
      <h1 className="text-white  font-montserrat font-bold text-center mb-6 lg:text-6xl md:text-5xl sm:text-3xl">
        WELCOME!
      </h1>
      <h2 className="text-white  font-montserrat mb-6 w-5/6 lg:w-3/6 md:w-4/6 sm:w-5/6 lg:text-4xl md:text-3xl sm:text-2xl">
        I'm Rasheed, a Fullstack Developer, Designer, and former Architect, who
        is passionate about creating exciting digital experiences and solving
        real-life problems with code.
      </h2>
        <button className="text-white text-  lg:text-2xl md:text-xl sm:text-xl font-montserrat bg-sky-600 w-68 h-16 rounded-full px-8 py-4 hover:bg-white hover:text-black" onClick={()=>{setExitLandingPage(true)}}>
          Explore My Portfolio
        </button>
    </div>
  );
}
