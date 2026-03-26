import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-between items-center px-20 py-5'>
      <p className='text-3xl font-bold'>Event Axioms</p>
      <nav className="flex gap-10 text-lg font-semibold">
          <NavLink to="/" className={({isActive})=>isActive ? "text-teal-600" : "text-gray-600"}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=>isActive ? "text-teal-600" : "text-gray-600"}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive})=>isActive ? "text-teal-600" : "text-gray-600"}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive ? "text-teal-600" : "text-gray-600"}>Contact Us</NavLink>
        </nav>
    </div>
  )
}
