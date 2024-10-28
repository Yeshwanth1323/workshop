import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const Linksdata = [
        {
            title:'Home',
            path: '/'
        },
        {
            title:'Products',
            path: '/products'
        },
        {
            title:'Contact',
            path: '/contacts'
        }
        

    ]
  return (
    <>
    <div className="w-screen h-20 shadow-purple-600 shadow-md flex flex-row justify-center items-center">
        <div className="w-[40%] flex justify-start items-center font-bold 2xl: text-red-500">
            MAXSTORE
        </div>
        <div className="w-[40%] h-full flex justify-end items-center">
       {/* <ul className="w-full flex flex-row justify-center items-center gap-8 font-semibold">
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
        </ul> */}
        <div className="w-full h-full flex flex-row justify-center items-center gap-8 font-bold">
            {Linksdata.map((link,index)=> (
            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500 hover:text-white flex justify-center items-center rounded-sm'>
                {link.title}

            </NavLink>
            ))
        }
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar