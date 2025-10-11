import './App.css'
import React, {lazy, Suspense} from 'react';


const Pages=lazy(()=>import('pagestApp/App'));

function App() {
  
  return (
    <>
      <div className='h-[500px] w-[1496px] p-0 m-0 bg-teal-400'>
        <h1>This is the Base App</h1>
        <Suspense>
          <Pages/>
        </Suspense>
      </div>
    </>
  )
}

export default App
