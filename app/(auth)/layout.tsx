import React, { ReactNode } from 'react'
import "./auth.css"

const AuthLayout = ({children} : {children : ReactNode} ) => {
  return (
    <main className='auth'>
        {children}
    </main>
  )
}

export default AuthLayout