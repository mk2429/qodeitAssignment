import React from 'react'
import Calculator from './Components/Calculator'
import Introtext from './Components/Introtext'
import Navbar from './Components/Navbar'
export default function Home() {
  return (
    <div className=" w-100 p-4 d-flex justify-content-center align-items-center flex-wrap" style={{backgroundColor:"#d7c6f3"}}>
    <Navbar/>
    <div className='maincontainer'>
    <Introtext/>
    <Calculator/>
    </div>
    </div>
  )
}
