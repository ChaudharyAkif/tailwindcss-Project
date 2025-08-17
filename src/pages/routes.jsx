import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth/routes'
import Frontend from './Frontend/routes'

const Index = () => {
  return (  
<>
<Routes>
<Route path='auth/*' element={<Auth />}/>
<Route path='/' element={<Frontend />}/>
</Routes>
</>
)
}

export default Index