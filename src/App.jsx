import React from 'react'
import Navbar from './Navbar'
import Boxes from './Boxes'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Board from './Board.jsx'

const App = () => {
  return (
    // <div className='flex items-center justify-start gap-5 p-5 w-full min-h-[100vh] flex-col'>
    //   <Navbar/>
    //   <Boxes/>
    // </div>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='/:id' element={<Board/>}></Route>
    </Routes>

  )
}

export default App
