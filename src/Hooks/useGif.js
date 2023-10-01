import axios from 'axios'
import React, { useEffect, useState } from 'react'

const URL =`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_Password}`
function useGif() {
    const [Loading,SetLoading]=useState(true)
    const [Gif,SetGif]=useState('');

    async function FetchGif(tag) {
        SetLoading(true)
        const {data}=await axios.get(tag?`${URL}&tag=${tag}`:URL);
        SetGif(data.data.images.downsized_medium.url)
        SetLoading(false)
    }

    useEffect(()=>{
        FetchGif()
    },[])

    return {Gif,Loading,FetchGif}
}

export default useGif