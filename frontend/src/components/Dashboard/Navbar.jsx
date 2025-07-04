import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center text-white justify-between h-12 bg-teal-600 px-5'>
        <p>Welcome to ePhonon Technologies</p>
        <button className='px-4 py-1 bg-teal-700 hover:bg-teal-800'>LogOut</button>
    </div>
  )
}

export default NavBar