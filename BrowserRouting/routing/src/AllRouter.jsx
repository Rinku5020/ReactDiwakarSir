import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import { Route, Routes } from 'react-router-dom'
function AllRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/service' element={<Service />} ></Route>
            </Routes>
        </div>
    )
}

export default AllRouter
