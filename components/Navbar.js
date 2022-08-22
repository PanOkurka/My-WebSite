import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
//<Link to='/wiki' classNameName='nav-link'>Wiki</Link>
import { FaCodeBranch } from '@react-icons/all-files/fa/FaCodeBranch'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { BsFillInfoCircleFill } from '@react-icons/all-files/bs/BsFillInfoCircleFill'
import { FaClipboardList } from '@react-icons/all-files/fa/FaClipboardList'
import { AiOutlineFileSearch } from '@react-icons/all-files/ai/AiOutlineFileSearch'
export const Navbar = () => {

    return (
      <aside className="h-screen fixed CustomSideBar z-30 w-60" aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 rounded" style={{backgroundColor: '#23272A'}}>
         <Link href="/">
            <a className="flex pl-2.5 mb-5 CustomLogoSide hover:no-underline">
                  <img className="mr-3 h-9 CustomBorder" alt='logo' src='/images/profile.gif' />
                  <span className="self-center text-lg font-semibold whitespace-nowrap text-white CustomTextSide hover:no-underline">Pan_Okurka</span>
            </a>
         </Link>
         <ul className="space-y-2">
            <li>
               <Link href="/">
                  <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem">
                     <FaHome className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"></FaHome>
                     <span className="ml-3 CustomTextSide">Home</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/bio" >
                  <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem">
                     <FaBook className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"></FaBook>
                     <span className="flex-1 ml-3 whitespace-nowrap CustomTextSide">Bio</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/info">
                  <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem">
                     <BsFillInfoCircleFill className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"></BsFillInfoCircleFill>
                     <span className="flex-1 ml-3 whitespace-nowrap CustomTextSide">Some Info</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/projects">
                  <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem">
                     <FaClipboardList className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"></FaClipboardList>
                     <span className="flex-1 ml-3 whitespace-nowrap CustomTextSide">Projects</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/ip">
                  <a className="flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem">
                     <AiOutlineFileSearch className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"></AiOutlineFileSearch>
                     <span className="flex-1 ml-3 whitespace-nowrap CustomTextSide">Your IP</span>
                  </a>
               </Link>
            </li>
        </ul>
         <div className='Footer' id="Footer">
          <div className="Middle">
                    <h3 className='text-lg'>&copy; 2020-{new Date().getFullYear()} Pan_Okurka</h3>
                        <p className='infos mt-4'> 
                            <span className='mt-5 items-center content-center flex justify-center'><FaCodeBranch/> prod-2.0.0</span>
                        </p>
          </div>
        </div>
      </div>
   </aside>
    )
}