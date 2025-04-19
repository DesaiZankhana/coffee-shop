import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Header />
      <main>
        <div className="">
          <Outlet />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout