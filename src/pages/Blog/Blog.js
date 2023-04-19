import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/NavBar/Navbar';

const UseEffectCompo = () => {
    const [data, setData] = useState();

   useEffect(()=>{
   

axios.get('https://password-json-4b19db.appdrag.site/api/getAllBlog', {
  params: {
    "AD_PageNbr" : "1",
    "AD_PageSize" : "500"
  }
}).then(function(response){
  console.log(response.data);
  setData(response.data.Table)
});
 
}, [] )

return (
    <div className='container'>
      <Navbar/>
        <h1 className='titre'></h1>
        {data?.map((row)=> (
            <div key={row.id}  className='bg-secondary shadow-lg rounded m-3 p-3'>
                <h2>{row.Title}</h2>
                <img src={row.Image} alt="" />
                <p>{row.Article} </p>
                <p>{row.Auteur}</p>
               
                
                
            </div>
        )

        )}
    </div>
)
}


export default UseEffectCompo;

