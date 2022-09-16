import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
    return (
        <div><h1>Las Cosas</h1>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Layout