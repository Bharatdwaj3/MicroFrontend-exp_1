import React from 'react'
import {Header, Content, Footer} from 'comp_app/components'
const Home = () => {
  return (
    <div className='m-0 p-0 bg-teal-500 h-[1400px] w-screen'>
      <p>  This is the Home Page ! </p>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  
  )
}

export default Home