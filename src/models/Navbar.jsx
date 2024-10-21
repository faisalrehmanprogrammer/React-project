import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [Open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prevState => !prevState);


    }
    const [Scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const [count, setcount] = useState(0)
    useEffect(() => {
        let target = 300
        let intervalSpeed = 50
        const incrementCounter = () => {
            setcount(prevcount => {
                if (prevcount < target) {
                    return prevcount + 1;

                } else {
                    clearInterval(interval)
                    return target;
                }
            })

        }
        const interval = setInterval(incrementCounter, intervalSpeed)
        return () => clearInterval(interval)

    })

    return (
        <>

            <section className='relative h-[150vh] w-[100%]'>

                <div className={` ${Scrolled ? "fixed top-0 z-50 bg-white w-full justify-center shadow-lg duration-700 translate-y-0" : "-translate-y-0 lg:absolute bg-black text-white lg:bg-transparent z-50 "} lg:w-full lg:mx-auto lg:flex justify-evenly  bg-black items-center transition-all duration-500 ease-out `}>
                    <div className='p-4 flex lg:flex justify-between items-center '>
                        <h2 className='text-2xl '><span className={`${Scrolled ? "text-black" : "text-white"}`}>a</span><span className='text-red-700'>v</span><span className={`${Scrolled ? " text-black" : "text-white"}`}>o</span></h2>
                        <button className={`${Scrolled ? "text-black" : "text-white"} lg:hidden`} onClick={toggle} >MENU</button>
                    </div>
                    <div className={` items-center transition-all duration-500 ease-in-out lg:flex ${Scrolled ? "text-black " : "text-white "}  ${Open ? ' block  p-1 translate-y-0  space-y-10' : 'opacity-0 lg:opacity-100 -translate-y-full lg:flex h-0 '}  `}>
                        <ul className={`w-full lg:space-x-10 lg:flex items-center font-Nunito font-semibold cursor-pointer `}>
                            <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Home</NavLink></li>
                            <li><NavLink to="/About" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>About</NavLink></li>
                            <li><NavLink to="/Work" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Work</NavLink></li>
                            <li><NavLink to="/Blog" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Blog</NavLink></li>
                            <li><NavLink to="/Contact" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className={`absolute  bg-center object-cover h-[100vh] bg-cover w-[100%] bg-[url(../bg1.jpg)] [clip-path:polygon(0%_0%,_100%_0%,_100%_95%,_65%_100%,_0%_95%)] `}>
                    <div className='relative  p-6 items-center w-full h-full md:w-[90%] lg:w-[80%] xl:w-[65%] md:mx-auto'>
                        <div className='mt-24 md:m-auto text-white h-full md:flex justify-between md:items-center'>
                            <div className='order-2 items-end'>
                                <h2 className='md:border-r-4 md:border-l-0 border-l-4 px-2 border-red-700 text-3xl font-bold'>{count}</h2>
                                <p className='text-gray-400 w-52 md:w-32 md:text-right'>More than a hundred successful projects</p>
                            </div>
                            <div className=' space-y-6 '>
                                <h1 className='text-2xl md:text-5xl font-extrabold xl:w-96 mt-6 font-Nunito'>We Create Modern & Minimal Website</h1>
                                <p className='font-Nunito w-72 text-gray-400'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <p className='bg-red-700 w-28 md:w-32 p-2 md:p-3 text-center rounded-sm '>Start Project</p>
                            </div>

                        </div>
                       
                    </div>
                   
                </div>

            </section>


           
        </>
    )
}

export default Navbar
