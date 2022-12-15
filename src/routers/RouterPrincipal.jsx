import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Home from '../components/view/home/Home'

export const RouterPrincipal = () => {

 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    
    </Routes>
    </BrowserRouter>

    )
}

