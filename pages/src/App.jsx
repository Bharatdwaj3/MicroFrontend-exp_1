import './App.css'
//import React, {lazy, Suspense} from 'react'

import 'http://localhost:5173/src/index.css'  

import Home from './Imp_Pages/Home'

//const CompApp=lazy(()=>import('comp_app/App'))
function App() {

  return (
    <>
       <div  className='h-[500px] w-[1469px] bg-green-500'>
          <Home/>
        </div>  
    </>
  )
}

export default App
