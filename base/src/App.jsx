import './App.css'
import React, {Suspense} from 'react';
import {Home, About} from 'page_app/pages';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import 'http://localhost:5174/src/index.css'
import 'http://localhost:5173/src/index.css'
//const Pages=lazy(()=>import('pagestApp/App'));

function App() {
  
  return (
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
            </Suspense>
          </Router>

  )
}

export default App
