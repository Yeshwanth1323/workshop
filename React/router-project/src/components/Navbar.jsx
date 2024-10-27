import React from 'react'

const Navbar = () => {
    const Linksdata=[
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
        <div className="w-[40%] flex justify-end items-center">
       {/* <ul className="w-full flex flex-row justify-center items-center gap-8 font-semibold">
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
        </ul> */}
        <div className="w-full flex flex-row justify-center items-center gap-8 font-semibold">
            {Linksdata.map((link,index)=> (
            <NavLink to={link.path} key={index}>
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