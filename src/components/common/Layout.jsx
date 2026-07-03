import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='px-4'>
            <main className='min-h-screen w-full max-w-6xl mx-auto'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout