import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const About = () => {


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




  return (
    <>

      <section className=' relative h-[130vh] w-full'>

        <div className={` ${Scrolled ? "fixed top-0 z-50 bg-white text-black lg:bg-white w-full  shadow-lg duration-700 translate-y-0 md:text-black" : "-translate-y-0 lg:absolute  bg-black text-white lg:bg-transparent z-50 "} lg:w-full  lg:mx-auto lg:flex justify-evenly  bg-black items-center transition-all duration-500 ease-out `}>
          <div className='p-4 flex lg:flex justify-between items-center'>
            <h2 className='text-2xl '><span className={`${Scrolled ? "text-black" : "text-white"}`}>a</span><span className='text-red-700'>v</span><span className={`${Scrolled ? " text-black" : "text-white"}`}>o</span></h2>
            <button className={`${Scrolled ? "text-black" : "text-white"} lg:hidden`} onClick={toggle} >MENU</button>
          </div>
          <div className={` items-center transition-all duration-500 ease-in-out lg:flex  ${Open ? ' block p-1 space-y-10' : 'opacity-0 lg:opacity-100 -translate-y-full lg:flex h-0 '}  ${Scrolled ? "text-black " : " text-white"} `}>
            <ul className={`lg:space-x-10 lg:flex items-center font-Nunito font-semibold cursor-pointer `}>
            <li><NavLink to="/" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Home</NavLink></li>
            <li><NavLink to="/About" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>About</NavLink></li>
            <li><NavLink to="/Work" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Work</NavLink></li>
            <li><NavLink to="/Blog" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Blog</NavLink></li>
            <li><NavLink to="/Contact" className={({ isActive }) => `${isActive ? 'text-red-800' : Scrolled ?'text-black ':'text-white'}`}>Contact</NavLink></li>
            </ul>
          </div>
        </div>

        <div className={`absolute   object-cover h-[85vh] bg-cover w-full bg-[url(../bg2.jpg)] [clip-path:polygon(0%_0%,_100%_0%,_100%_84%,_64%_100%,_0_85%)] `}>
          <div className=' md:w-[95%] lg:w-[80%] xl:w-[60%] md:mx-auto '>
            <div className='absolute bottom-48 flex gap-10  w-full font-Nunito md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto'>
              <li><NavLink to="/" className="absolute hover:text-red-700 text-gray-400 bottom-">HOME <span className='text-red-700'><i class="fa-solid fa-chevron-right"></i></span></NavLink></li>

              <li><NavLink to="/About" className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-whit ')}>ABOUT US <span className='text-red-700'><i class="fa-solid fa-chevron-right"></i></span></NavLink></li>

            </div>
            <div className=' w-full  bottom-32 absolute md:w-[95%] lg:w-[80%] xl:w-[60%] md:mx-auto'>
              <h1 className='text-white text-4xl  font-black ml-5'>ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col  items-center justify-center text-center animate-slide-up '>
        <h1 className=' text-3xl font-Nunito font-extrabold '>ABOUT US</h1>
        <div className='w-[70%] flex-col md:flex-row flex items-center justify-center py-20 md:space-x-5 font-Nunito tracking-wider md:space-y-0 space-y-20 '>
          <div className='flex-grow space-y-4'>
            <img src="/ux.png" alt="about" className='mx-auto w-14 mt-' />
            <p className=''>UI/UX Design</p>
          </div>
          <div className='flex-grow space-y-4'>
            <img src="/development.png" alt="about" className='mx-auto  w-14 mt-' />
            <p className=' text-center'>Web development</p>
          </div>
          <div className='flex-grow space-y-4'>
            <img src="/product.png" alt="about" className='mx-auto w-14 mt-' />
            <p className='text-center'>Product Design</p>
          </div>
          <div className='flex-grow space-y-4'>
            <img src="/phone.png" alt="about" className='mx-auto w-14 mt-' />
            <p>Mobile Apps</p>
          </div>
          <div className='flex-grow space-y-4'>
            <img src="/seo.png" alt="about" className='mx-auto w-14 mt-0' />
            <p>SEO</p>
          </div>
        </div>
      </section>

      <section className='space-y-10 w-full'>
        <div className='md:grid md:grid-cols-3 flex-grow mx-auto lg:w-[70%] '>

          <div className=' p-4  font-Nunito space-y-5  animate-slide-up'>


            <h1 className='font-bold  text-3xl'>Welcome to AVO A Personal Porfolio Web Agency</h1>
            <p className='text-gray-400'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

          </div>
          <div className=''><img src="https://preview.colorlib.com/theme/avo/images/about.jpg" alt="" className='object-cover bg-cover p-4 h-full' /></div>

          <div className='p-4 font-Nunito space-y-4  animate-slide-up'>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p ><a className='text-gray-300 bg-red-600 px-2 py-2 rounded-sm' href="">View all projects</a></p>
          </div>
        </div>
        <div className='p-4 space-y-5 md:space-y-0 md:flex flex-grow lg:w-[70%] mx-auto  animate-slide-up'>
          <div className='font-Nunito flex '>
            <span className='text-red-600 text-6xl border-b-2 '>01</span>
            <div className='flex flex-col  leading-7 px-3'>
              <h1 className=''>Search Engine Optimization</h1>
              <p className=' text-gray-400'>Far far away, behind the word mountains</p>
            </div>
          </div>
          <div className='font-Nunito flex'>
            <span className='text-red-600 text-6xl border-b-2 '>02</span>
            <div className='flex flex-col leading-7 px-3'>
              <h1 className=''>Search Engine Optimization</h1>
              <p className=' text-gray-400'>Far far away, behind the word mountains</p>
            </div>
          </div>
          <div className='font-Nunito flex'>
            <span className='text-red-600 text-6xl border-b-2 '>03</span>
            <div className='flex flex-col  leading-7 px-3'>
              <h1 className=''>Search Engine Optimization</h1>
              <p className=' text-gray-400'>Far far away, behind the word mountains</p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative w-full h-screen p-4 md:p- md:h-full md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto'>
        <div className='object-cover bg-cover bg-center p-5 md:py-16 md:px-12 bg-[url(/bg1.jpg)] '>
          <div className=' font-Nunito space-y-3   animate-slide-up md:w-[45%] '>
            <p className=' text-red-600'>Get Started</p>
            <h1 className=' text-white text-3xl'>Fill in the brief and get the project estimate</h1>
            <p className='text-gray-400 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='bg-red-600 text-white rounded-sm px-2 py-1'>Get Started</button>
          </div>
        </div>
      </section>

      <section className='w-full h-[100%] bg-gray-200  md:[clip-path:polygon(35%_0%,_100%_6%,_100%_94%,_66%_100%,_0_94%,_0_7%)] [clip-path:polygon(40%_1%,_100%_2%,_100%_99%,_59%_100%,_0%_99%,_0%_2%)]'>
        <h1 className='flex text-3xl font-Nunito font-black text-zinc-800  justify-center py-20 animate-slide-up'>EXPERT TEAM</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto'>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-1.jpg)]  '>
          <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>JOHN WILSON</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Designer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[51vh] bg-[url(https://preview.colorlib.com/theme/avo/images/team-2.jpg.webp)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5 uppercase'>robert wills</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Designer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-3.jpg)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>MIKE SMITH</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Designer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-4.jpg)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1'>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>ADRIAN HENDERSON</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Designer</p>
          </div>
        </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto pb-20'>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-5.jpg)]  '>
          <div className='bg-black absolute inset-0 opacity-15'></div>            

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul></div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>JOHN WILSON</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Programmer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[51vh] bg-[url(https://preview.colorlib.com/theme/avo/images/team-6.jpg)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5 uppercase'>robert wills</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Web Designer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-7.jpg)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>MIKE SMITH</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>Graphic Designer</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto relative bg-cover bg-center w-full h-[22rem] bg-[url(https://preview.colorlib.com/theme/avo/images/team-8.jpg)]  '>
            <div className='bg-black absolute inset-0 opacity-15'></div>

            <ul className='absolute text-1xl text-red-600 top-6 left-5 space-y-1 '>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="" className='w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300'><i class="fa-brands fa-google"></i></a></li>
            </ul>
          </div>
          <div className='font-Nunito tracking-wider p-6'>
            <h1 className='font-extrabold text-[21px] w-20 leading-5'>ADRIAN HENDERSON</h1>
            <p className='text-red-600 font-semibold text-[15px] mt-2'>SEO</p>
          </div>
        </div>
        </div>

      </section>









      <footer className='bg-black w-[100%] h-full [clip-path: polygon(%0_5%,_36%_0%,_100%_4%,_100%_100%,_1%_100%)]'>
        <div className='p-4 space-y-10 md:grid md:grid-cols-5 md:gap-4 lg:w-[70%] md:mx-auto '>
          <div className='text-white font-Nunito space-y-7 md:w-[90%] mt-10 '>
            <h1 className='text-lg font-bold'>avo</h1>
            <p className='text-white/50 '>Far far away, behind the word mountains, far from the countries</p>
            <div className='text-gray-400 flex md:grid-cols-3 '>
              <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-twitter"></i></a>
              <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-facebook-f"></i></a>
              <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div className='text-white font-Nunito space-y-7'>
            <h1 className='text-lg font-bold'>Community</h1>
            <ul className='text-white/50 space-y-2 '>
              <li className=''>
                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Project</span>
                </a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Teams</span>
                </a>
              </li>
              <li>
                <a href=""> <i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Reviews</span>
                </a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>FAQs</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='text-white font-Nunito space-y-7'>
            <h1 className='text-lg font-bold'>About Us</h1>
            <ul className='text-white/50 space-y-2 '>
              <li className=''>
                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Our Story</span>
                </a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Meet the team</span>
                </a>
              </li>
              <li>
                <a href=""> <i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Careers</span>
                </a>
              </li>

            </ul>
          </div>
          <div className='text-white font-Nunito space-y-7'>
            <h1 className='text-lg font-bold'>Company</h1>
            <ul className='text-white/50 space-y-2 '>
              <li className=''>
                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>About Us</span>
                </a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Press</span>
                </a>
              </li>
              <li>
                <a href=""> <i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Contact</span>
                </a>
              </li>
              <li>
                <a href=""><i class="fa-solid fa-angle-right"></i>
                  <span className='ml-1'>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='text-white font-Nunito space-y-7 '>
            <h1 className='text-lg font-bold'>Have a Question?</h1>
            <ul className='text-white/50 space-y-4 '>
              <li className=''>
                <a href="" className='inline-flex '><i class="fa-solid fa-map"></i>
                  <span className='ml-6 '>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </a>
              </li>
              <li>
                <a href="" className='inline-flex'><i class="fa-solid fa-phone"></i>
                  <span className='ml-6 text-sm '>+2 392 3929 210</span>
                </a>
              </li>
              <li>
                <a href="" className='inline-flex'><i class="fa-solid fa-envelope"></i>
                  <span className='ml-6 text-sm'>info@yourdomain.com</span>
                </a>
              </li>

            </ul>
          </div>





        </div>
        <div className='text-white/70 flex justify-center p-4 text-center '>
          <p className='my-20'>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <a href="" className='text-red-700'>Colorlib</a></p>
        </div>
      </footer>



    </>
  )
}

export default About
