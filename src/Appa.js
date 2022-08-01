import React from 'react'
import { useEffect } from 'react';

export default function Appa() {
    let age = 41;

    useEffect(() => {
      
    setTimeout(() => {
        age = 21;
    }, 5000);
   
    }, [])
    
  return (
    <div>{age}</div>
  )
}

