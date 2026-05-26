"use client";
import React from 'react';

import { FloatingNav } from '../ui/floating-navbar'
import { Home, User, Mail  } from 'lucide-react';

const Navbar = () => {


  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];



  return (
    <div>
     
            <FloatingNav navItems={navItems} />
             
             <div className='bg-red-100 h-[1000px]'> Navbar(Shafique)</div>
            

    </div>
  )
}

export default Navbar
