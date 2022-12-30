/* eslint @next/next/no-img-element: 0 */

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
//<Link to='/wiki' classNameName='nav-link'>Wiki</Link>
import { FaCodeBranch } from '@react-icons/all-files/fa/FaCodeBranch'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { FaBook } from '@react-icons/all-files/fa/FaBook'
import { BsFillInfoCircleFill } from '@react-icons/all-files/bs/BsFillInfoCircleFill'
import { FaClipboardList } from '@react-icons/all-files/fa/FaClipboardList'
import { AiOutlineFileSearch } from '@react-icons/all-files/ai/AiOutlineFileSearch'
import { BsArrowLeftShort } from '@react-icons/all-files/bs/BsArrowLeftShort'
import { MdForum } from 'react-icons/md'
import LgnBtn from './login-button';
export const Navbar = () => {

   const [open, setOpen] = useState(false);

    return (
      <aside className={`h-screen fixed CustomSideBar duration-300 z-30 ${open? "w-60" : "w-20"}`} aria-label="Sidebar">
      <div className="overflow-y-auto h-screen py-4 px-3 rounded" style={{backgroundColor: '#23272A'}}>
         <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
         <Link href="/">
            <a className={`flex pl-2.5 pb-2 mb-3 CustomLogoSide hover:no-underline border-b-2 border-solid border-gray-500`}>
                  <img className="mr-3 h-9 CustomBorder" alt='logo' src='/images/profile.gif' />
                  <span className={`self-center text-lg font-semibold whitespace-nowrap text-white CustomTextSide hover:no-underline ${!open && "scale-0"}`}>Pan_Okurka</span>
            </a>
         </Link>
         <ul className="space-y-2">
            <li>
               <Link href="/">
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <FaHome className={`text-3xl duration-75 text-gray-400`}></FaHome>
                     <span className={`ml-10 absolute CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Home</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/blog" >
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <MdForum className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></MdForum>
                     <span className={`flex-1 ml-10 absolute whitespace-nowrap CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Blog</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/bio" >
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <FaBook className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></FaBook>
                     <span className={`flex-1 ml-10 absolute whitespace-nowrap CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Bio</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/info">
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <BsFillInfoCircleFill className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></BsFillInfoCircleFill>
                     <span className={`flex-1 ml-10 absolute whitespace-nowrap CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Some Info</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/projects">
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <FaClipboardList className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></FaClipboardList>
                     <span className={`flex-1 ml-10 absolute whitespace-nowrap CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Projects</span>
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/ip">
                  <a className={`flex items-center p-2 text-base font-normal rounded-lg text-white hoverNavItem ${!open && "justify-center"}`}>
                     <AiOutlineFileSearch className="text-3xl transition duration-75 text-gray-400 group-hover:text-white"></AiOutlineFileSearch>
                     <span className={`flex-1 ml-10 absolute whitespace-nowrap CustomTextSide duration-150 ${!open && "hidden scale-0 duration-75"}`}>Your IP</span>
                  </a>
               </Link>
            </li>
            <li>
               <LgnBtn state={open} />
            </li>
        </ul>
         <div className='Footer absolute' id="Footer">
          <div className={`Middle duration-150 ${!open && "hidden scale-0 duration-75"}`}>
                    <h3 className='text-lg'>&copy; 2020-{new Date().getFullYear()} Pan_Okurka</h3>
                        <p className='infos mt-4'> 
                            <span className='mt-5 items-center content-center flex justify-center'><FaCodeBranch/> prod-2.1.0</span>
                        </p>
          </div>
        </div>
      </div>
   </aside>
    )
}