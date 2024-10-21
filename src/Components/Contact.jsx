import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Contact = () => {


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

      <section className=' relative h-screen w-full'>

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

              <li><NavLink to="/Contact" className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-whit ')}>CONTACT<span className='text-red-700'><i class="fa-solid fa-chevron-right"></i></span></NavLink></li>

            </div>
            <div className=' w-full  bottom-32 absolute md:w-[95%] lg:w-[80%] xl:w-[60%] md:mx-auto'>
              <h1 className='text-white text-4xl  font-black ml-5'>CONTACT</h1>
            </div>
          </div>
        </div>
      </section>
     
        <p className='text-red-600 flex justify-center uppercase'>Contact us</p>
        <h1 className='flex text-4xl font-Nunito font-black text-zinc-800  justify-center p-5 animate-slide-up uppercase'>Have a Project?</h1>
        <p className='text-gray-500 flex text-center items-center justify-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

      <section className='flex-col md:flex p-4 mt-28 sm:flex-col lg:flex-row  md:gap-4 lg:w-[75%] md:mx-auto '>
        <div className="w-auto px-10 py-10 bg-white rounded-lg  shadow-2xl mx-auto">
          <form className=" w-full  space-y-4">
            <div className='flex space-x-7'>
              <div className=''>

                <input type="text" id="name" name="name" placeholder='Your Name' className=" w-full px-7 py-3  bg-gray-100 " required />
              </div>

              <div className=''>

                <input type="tel" id="phone" name="phone" placeholder='Your Phone' className=" w-full   px-7 py-3  bg-gray-100 " required />
              </div>
            </div>

            <div>

              <input type="email" id="email" name="email" placeholder='Your Email' className="w-full   px-4 py-3  bg-gray-100 " required />
            </div>

            <div>

              <textarea id="message" name="message" rows="4" placeholder='Message' className="w-full   p-4 bg-gray-100" required></textarea>
            </div>

            <div>
              <button type="submit" className=" border md:w-[] border-cyan-500 px-6 py-3 bg-red-600 text-white font-medium rounded-sm">Send Message</button>
            </div>
          </form>
        </div>


        <div className='  space-y-14 p-4 mr-auto '>
          <div className='flex space-x-4'>
            <span className='text-white bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'><i class="fa-solid fa-location-dot"></i></span>
            <div className=''>
              <span className='text-black font-customfont block' >ADDRESS:</span>
              <h1 className='font-custom md:text-[18px] md:w-80 text-gray-400'>98 West 21th Street, Suite 721 New York NY 10016</h1>

            </div>
          </div>
          <div className='flex space-x-4'>
            <span className='text-white bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'><i class="fa-solid fa-phone"></i></span>
            <div className=''>
              <span className='text-black font-customfont block ' >PHONE:</span>
              <h1 className='font-custom text-red-600'>(+1) 435 3533</h1>
            </div>
          </div>
          <div className='flex space-x-4'>
            <span className='text-white bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'><i class="fa-solid fa-envelope"></i></span>
            <div className='flex-col'>
              <span className='text-black font-customfont block'>EMAIL:</span>
              <h1 className='font-custom  text-red-600'>info@yourdomain.com</h1>
            </div>
          </div>
          <div className='flex space-x-4'>
            <span className='text-white bg-red-600 w-12 h-12 flex items-center justify-center rounded-full'><i class="fa-solid fa-globe"></i></span>
            <div className=''>
              <span className='text-black font-customfont block'>Website:</span>
              <h1 className='font-custom  text-red-600'>Yoursite.com</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='p-4 md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto'>
        <div className='bg-gray-300 w-full h-80 p-10 space-y-6 flex-col justify-center items-center text-center'>
          <img src="./oops.png" alt="" className='w-10 mx-auto ' />
          <h1 className='text-3xl '>Oops! Something went wrong.</h1>
          <p className=''>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>

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

export default Contact
