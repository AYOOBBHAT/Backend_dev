import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';




function App() {
  const [employee,setemployees]=useState([]);

  useEffect(()=>{
    axios.get ('/api/employees').then((response)=>{
      setemployees(response.data);

    }).catch((error)=>{
      console.log(error);


    })

  })
  return (
    
      <div> <h1>

        hello AB 
      </h1>
      <p> employees :{employee.length }</p>
      {

        employee.map((employe,index)=>(
          <div key={employe.id}>
            <h3> {employe.title}</h3>
            <p> {employe.content}</p>
             </div>

        ))
}
      

      </div>
        
     
    
  )
}

export default App
