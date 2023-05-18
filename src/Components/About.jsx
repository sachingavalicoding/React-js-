import React, {  useState, useEffect } from 'react'
function About() {
   const [a,setA] = useState(0);
   /* const  increment = ()=> setA(a+1);
   const  deicrement = ()=> setA(a-1); */

   useEffect( ()=>{
     console.log(" Sachin ");
      return ()=>{
        
      }
   } ,[a] )
  return (
    <div className='main'>
      <button onClick = {()=> setA(a+1)}> Add </button>
      <span> {a} </span>
      <button onClick ={()=> setA(a-1)}> Minus </button>
    </div>
  )
}

export default About
