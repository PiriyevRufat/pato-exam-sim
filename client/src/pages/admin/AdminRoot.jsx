import React from 'react'
import Footer from '../../layouts/admin/Footer/Footer'
import Header from '../../layouts/admin/Header/Header'
import { Outlet } from 'react-router'
const AdminRoot = () => {
  return (
    <React.Fragment>
    <Header/>
    <Outlet/>
    <Footer/>
    </React.Fragment>
  )
}

export default AdminRoot
