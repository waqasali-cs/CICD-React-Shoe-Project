import React from 'react'
import Nav from './components/Nav'
import './App.css'
import ShoeDetail from './components/ShoeDetail'

function App() {

  return (
    <>
      <div className='px-4 py-5 lg:px-16 animate-fadeIn'>
        <Nav />
        <ShoeDetail />
      </div>
    </>
  )
}

export default App
