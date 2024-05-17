import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Description from './Pages/Description'
import Login from './Pages/Login'
import PrivateRout from './Pages/PrivateRout'
function AllRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/service' element={<Service />} ></Route>
                <Route path='/product' element={
                <PrivateRout>
                <Product />
                </PrivateRout>
                } >
                    
                </Route>
                <Route path='*' element={<NotFound />} ></Route>
                <Route path='/description/:id' element={<Description />} ></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRouter
