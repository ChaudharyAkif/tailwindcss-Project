import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'

const Frontend = () => {
  return (
    <>
<Routes>
<Route path='/' element={<Home />}/>
</Routes>
</>
  )
}

export default Frontend