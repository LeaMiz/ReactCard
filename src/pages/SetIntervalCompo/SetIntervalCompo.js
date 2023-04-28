import React, {useEffect, useState } from 'react'

const SetIntervalCompo = () => {
    const[time, setTime] = useState(0);
    useEffect(()=>{
        const SetIntervalId = setInterval(()=>{
            setTime((prevstate) => (prevstate +1))  // tu garde l'etat d'avant et tu me rajoute +1
        }, 1000)
        return () => clearInterval(SetIntervalId)
    }, []);
  return (
    <div>Mon compteur tourne depuis : {time} </div>
  )
}

export default SetIntervalCompo