import bgvideo from '../assets/beachVid.mp4'
import React from 'react'
import Searchbar from './searchbar'

export default function Banner({onSearch}){

    return (
        <div className="Container mx-auto px-4 relative inset-0 flex justify-center items-center mb-10">
            <div className="absolute z-10">
                <h1 className='font-black font-rosarivo text-white md:text-[80px] text-[30px]'>Plan Your Next Move</h1>
                     <Searchbar onSearch={onSearch}/>
            </div>
        <video
        src={bgvideo}
        className='w-full mx-auto object-cover opacity-65'
        autoPlay
        loop
        muted
      /> 
      </div>
    )
    
}