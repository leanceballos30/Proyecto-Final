import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'
import AdminUsers from '../page-adminUser/AdminUsers'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/admin-users' element={<AdminUsers/>}/>
    </Routes>
    </BrowserRouter>

    )
}

