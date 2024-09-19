import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

function CommonLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='min-h-screen'>
    <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default CommonLayout
