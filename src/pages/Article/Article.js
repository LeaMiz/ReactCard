import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Article = () => {
    const [data, setData] = useState()
    let location = useLocation()
    console.log("location", location.pathname.slice(9));
    useEffect(()=>{
        console.log("hello");
        axios.get('https://password-json-4b19db.appdrag.site/api/getApiID', {
  params: {
    "id" : location?.pathname?.slice(9),
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  console.log(response.data.Table[0]);
  setData(response.data.Table[0])
});
    },[])

  return (
    <div className='container'> 
    <div className='row justify-content-center'>
      {data  &&  
      <>
        <div className='col-10 shadow rounded-3'></div>
       
      
        <div>{data.id}</div>
        <h1 className='text-center'>{data.Titre}</h1>
        <p className='p my-4'>{data.Article}</p>
        <img src={data.Image} alt=""></img>
        
        </>
        }
    </div>
  Hello Article</div>
  )
}

export default Article