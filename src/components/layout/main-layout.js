import React from 'react'
import Footer from '../footer/footer'
import Navbar from '../header/header'

const Layout = ({ children }) => {
  return (
    <>
     <Navbar />
      {children}
     <Footer />
    </>
  )
}

export default Layout