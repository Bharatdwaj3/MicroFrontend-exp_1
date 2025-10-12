import './App.css'
//import React, {lazy, Suspense} from 'react'

import 'http://localhost:5173/src/index.css'  

import {Home,About } from './Imp_Pages/index'

//const CompApp=lazy(()=>import('comp_app/App'))
function App() {

  return (
    <>
       <div  className='h-[500px] w-[1469px] bg-green-500'>
          <Home/>
          <About/>
        </div>  
    </>
  )
}

export default App
