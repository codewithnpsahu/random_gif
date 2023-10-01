import {useState} from 'react'
import Spinner from './Spinner'
import useGif from '../Hooks/useGif'

const InputGif = () => {
  const [Tag,SetTag]=useState('');
    const {Gif,Loading,FetchGif}=useGif()
    return (
      <div className='w-1/2 mx-auto bg-[#a0a0ed] border flex flex-col justify-center items-center rounded-lg gap-5 mb-4 max-md:w-[80vw]'>
          <div className='text-3xl uppercase font-bold mt-5'>
              {`${Tag} Random Gif`}
          </div>
          <div className='px-10'>
              {
                Loading?<Spinner/>:<img className='rounded-lg' src={Gif} alt='gif'/>
              }
          </div>
          <div className='mb-10 flex flex-col gap-4' >
              <input type='text' className='text-center rounded-md' value={Tag} name='tag' onChange={(e)=>SetTag(e.target.value)} />
              <button className='btn' onClick={()=>FetchGif(Tag)}>Genrate</button>
          </div>
      </div>
    )
}

export default InputGif