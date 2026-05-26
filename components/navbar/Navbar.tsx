"use client";

import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { Home, User, Mail  } from 'lucide-react';

const Navbar = () => {


  const navItems = [
    { name: "Home", link: "/", icon: Home },
    { name: "About", link: "#about", icon: User },
    { name: "Contact", link: "#contact", icon: Mail },
  ];



  return (
    <div>
     
            <FloatingNav navItems={navItems} />
             
             <div className='bg-red-100 h-[1000px]'> Navbar(Shafique)</div>
            

    </div>
  )
}

export default Navbar
