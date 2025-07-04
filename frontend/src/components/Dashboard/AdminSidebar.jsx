import React from 'react'
import { FaBuilding, FaHome, FaRegCalendarAlt, FaTachometerAlt, FaTools, FaUsers } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdCurrencyRupee } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 bottom-0 top-0 space-y-2 w-64'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
        <h3 className='text-xl text-center font-pecific'>TimeSheet Mangement</h3>
    </div>
    <div className='px-4'>
        <NavLink to='/admin-dashboard'
        className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
            <FaTachometerAlt />
            <span>Dashboard</span>
        </NavLink>
         <NavLink to='/admin-dashboard'
         className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
            <FaUsers />
            <span>Employees</span>
        </NavLink>
        <NavLink to='/admin-dashboard'
        className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
            <FaBuilding />
            <span>Department</span>
        </NavLink>
        <NavLink to='/admin-dashboard'
        className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
            <FaRegCalendarAlt />
            <span>Leave</span>
        </NavLink>
        <NavLink to='/admin-dashboard'
        className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
            <MdCurrencyRupee />
            <span>Salary</span>
        </NavLink>
        <NavLink to='/admin-dashboard'
        className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
            <IoMdSettings />
            <span>Setting</span>
        </NavLink>

    </div>
    </div>
  )
  
}


export default AdminSidebar