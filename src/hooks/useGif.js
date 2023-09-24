
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';




const API_KEY=process.env.REACT_APP_GIPHY_APIA_KEY;


const useGif = (tag) => {
   
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    const randomMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
     const tagMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    
    async function fetchData(tag){
      setLoading(true);
      
      const {data}=await axios.get(tag ?tagMemeurl:randomMemeurl);
      
      const imageSource=data.data.images.downsized_large.url;
      
      setGif(imageSource);
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])
  
    return{gif,loading,fetchData};
   
    
}

export default useGif
