import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../Pages/ProductPage'
import Cartpage from '../Pages/Cartpage'

export default function AllRoutes() {
    return (
        <div>
            <Routes  >
                <Route path="/" element={<ProductPage/>} />
                <Route path="/cart" element={<Cartpage/>} />

            </Routes>
        </div>
    )
}
