import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Nav = () => {
  const navitem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Page",
      path: "/page",
    },
    {
      title: "About",
      path: "/courses",
    },
    {
      title: "Gallery",
      path: "/instructor",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
   <div className='w-full h-16 sticky'>
   <div className='w-full h-16  z-50 bg-opacity-40 bg-black  flex items-center  '>                  
    <div className=' w-full flex items-center justify-around  '>
     <img   src="logo.png" alt=""></img>
     <div className=' flex  items-center justify-center gap-6'>
       {navitem.map((val,index)=>(
    <a href={val.path} key={index} className='ml-6 text-white hover:text-[#fc6060] text-lg font-medium ease-in duration-300'>{val.title}</a>))}
       <  IoSearchSharp className='text-white font-medium text-3xl ml-36   ' />
     </div>
    </div>
   </div>
   </div>
  )
}

export default Nav;
