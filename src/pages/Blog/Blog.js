import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/NavBar/Navbar';
import {Link} from "react-router-dom"

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
          <Link className='text-decoration-none text-dark' to={`/article/${row.id}`}>
            <div key={row.id}  className='bg-secondary shadow-lg rounded m-3 p-3'>
                <h2 className=''>{row.Titre}  </h2>
                <img src={row.Image} className='img-fluid' alt="" />
                <p>{row.Article} </p>
                <p>{row.Auteur}</p>
               
                
                
            </div>
            </Link>
        )

        )}
    </div>
)
}


export default UseEffectCompo;

