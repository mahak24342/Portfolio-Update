"use client"
import React,{useEffect, useState} from 'react'

const Fetch = () => {
    const[data,setData]=useState();

   const fetchDat=async()=>{
    try{
const apii=await fetch('https://jsonplaceholder.typicode.com/todos');
const res=await apii.json();
setData(res)
    }catch(error){
        console.log(error)
    }
   }
useEffect(()=>{
fetchDat();
},[])
  return (
    <div>
      
     
     
   {
    data && data.map((inx)=>(
        <>
        <h2 key={inx.id}>{inx.id}</h2>
        <h2>{inx.title}</h2>
        </>
    ))
   }
        
    </div>
  )
}

export default Fetch
