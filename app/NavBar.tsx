'use client';
import React from 'react'
import Link from 'next/link'
import { HiAcademicCap } from "react-icons/hi2";
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
const NavBar = () => {

    const currentPath=usePathname();
    console.log(currentPath)
    const links=[
        {label: 'Home', href:"/"},
        {label: 'Analysis', href:"/analysis"}
    ]
  return (
    <nav className="flex space-x-6 border-b border-black px-5 h-14 items-center bg-gradient-to-b from-amber-100 to-orange-200">
        <Link href="/" className='text-black'><HiAcademicCap />
        </Link>
        <ul className="flex space-x-6">
            {links.map(link => 
            <Link 
                key={link.href}
                href={link.href}
                className={`${link.href===currentPath ? 'text-zinc-900':'text-zinc-500'} hover:text-zinc-800 transition-colors`}>{link.label}
            </Link>)}
        </ul>    
    </nav>
  )
}

export default NavBar