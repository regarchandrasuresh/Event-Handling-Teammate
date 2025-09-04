import React from "react";
export default function Name(){
  const HandleEvent=(identity)=>{
    console.log(`your name is:${identity}`)
  }
   return (
     <div>
       <h1>TEAM MATE</h1>
       <button onClick={()=>{HandleEvent("Situ")}}> Situ</button>
       <button onClick={()=>{
         HandleEvent("Vivek")
       }}>Vivek</button>
       <button onClick={()=>{
         HandleEvent("Suresh")
       }}>Suresh</button>
       </div>
   )
}
