import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const RootLayout = ({ children }) => {
  return (
    <div className=" flex justify-between flex-col  container mx-auto  ">
      <Navbar />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

export default RootLayout
