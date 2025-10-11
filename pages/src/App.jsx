import './App.css'
import React, {lazy, Suspense} from 'react'

import 'http://localhost:5174/src/index.css'  
const CompApp=lazy(()=>import('comp_app/App'))
function App() {

  return (
    <>
       <div  className='h-[500px] w-[1469px] bg-green-500'>
          <h1>This is the Host App</h1>   
          <p>This is the main Container App</p>
          <hr />
          <Suspense fallback={<div>Loading remote component...</div>}>
            <CompApp/>
          </Suspense>
        </div>  
    </>
  )
}

export default App
