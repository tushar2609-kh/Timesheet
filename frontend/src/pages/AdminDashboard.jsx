import React from 'react'
import AdminSidebar from '../components/Dashboard/AdminSidebar'
import NavBar from '../components/Dashboard/Navbar'
import AdminSummary from '../components/Dashboard/AdminSummary'

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='flex-1 ml-64 items-center bg-gray-100 h-screen'>
      <NavBar />
      <AdminSummary />
      </div>
      
    </div>
  )
}

export default AdminDashboard