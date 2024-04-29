import React, { ReactNode } from 'react'
import "./auth.css"
import NavBar from '@/components/NavBar';

const AuthLayout = ({children} : {children : ReactNode} ) => {
  return (
    <main className='auth'>
        <NavBar hidden/>
        {children}
    </main>
  )
}

export default AuthLayout