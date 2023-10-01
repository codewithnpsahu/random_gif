import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../Hooks/useGif'

const Randomgif = () => {
  const {Gif,Loading,FetchGif}=useGif()
  return (
    <div className='w-1/2 mx-auto border bg-[#94f0d1] flex flex-col justify-center items-center rounded-lg gap-5 max-md:w-[80vw]'>
        <div className='text-3xl uppercase font-bold mt-5'>
            A Random Gif
        </div>
        <div className='px-10'>
            {
              Loading?<Spinner/>:<img className='rounded-lg' src={Gif} alt='gif'/>
            }
        </div>
        <div className='mb-10'>
            <button className='btn ' onClick={()=>FetchGif()}>Genrate</button>
        </div>
    </div>
  )
}

export default Randomgif