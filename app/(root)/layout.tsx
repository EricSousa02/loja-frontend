import NavBar from '@/components/NavBar/NavBar'
import React, { ReactNode } from 'react'

const RootLayout = ({children} : {children : ReactNode} ) => {
  return (
    <main>
      <NavBar/>
        {children}
    </main>
  )
}

export default RootLayout