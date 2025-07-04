import React from 'react'
import SummaryCard from './SummaryCard'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaUsers } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const AdminSummary = () => {
  return (
    <div className='p-6'>
        <h3 className='text-2xl font-bold'>Dashboard Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <SummaryCard icons={<FaUsers />} text="Total Employees" number={15} color="bg-teal-600"/>
            <SummaryCard icons={<FaBuilding />} text="Total Departments" number={5} color="bg-yellow-600"/>
            <SummaryCard icons={<FaMoneyBill1Wave />} text="Monthly Salary" number="$654" color="bg-red-600"/>
        </div>
        <div className='mt-12'>
            <h4 className='text-center text-2xl font-bold'>Leave Details</h4>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            <SummaryCard icons={<FaFileAlt />} text="Leave Applied" number={5} color="bg-teal-600"/>
            <SummaryCard icons={<FaCheckCircle />} text="Leave Approved" number={3} color="bg-green-600"/>
            <SummaryCard icons={<FaUsers />} text="Leave Pending" number={4} color="bg-yellow-600"/>
            <SummaryCard icons={<FaUsers />} text="Leave Rejected" number={1} color="bg-red-600"/>
           </div>           
        </div>
    </div>
  )
}

export default AdminSummary