import React from 'react'

const GithubButton = () => {
    const githubLink = "https://github.com/Rasheednour/rashnor.com"
  return (
    <div>
        
        <a href={githubLink} target="_blank" rel="noreferrer">
        <img src='images/github-mark-white.png' className="fixed z-10 w-12 left-6 bottom-6 cursor-pointer hover:rotate-12"></img>
        </a>
    </div>
  )
}

export default GithubButton