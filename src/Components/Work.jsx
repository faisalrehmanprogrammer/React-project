import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const work= () => {


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

              <li><NavLink to="/work" className={({ isActive }) => (isActive ? 'text-gray-400' : 'text-whit ')}>WORK<span className='text-red-700'><i class="fa-solid fa-chevron-right"></i></span></NavLink></li>

            </div>
            <div className=' w-full  bottom-32 absolute md:w-[95%] lg:w-[80%] xl:w-[60%] md:mx-auto'>
              <h1 className='text-white text-4xl  font-black ml-5'>WORK</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className='flex relative bg-white'>
      <div className='mt-40 '>
        <h1 className='flex text-4xl font-Nunito font-black text-zinc-800 justify-center  animate-slide-up'>OUR WORKS</h1>
        <div className='font-Nunito mx-auto w-full grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center'>
          <img src="/work1.jpg" alt="" className='p-4' />
          <div className='p-7 space-y-5 '>
            <h5 className='tracking-wide font-thin '>Web Design</h5>

            <h2 className='text-4xl flex-grow transition-all duration-500 ease-in-out'>Cassette tape</h2>

            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp" alt="" className='w-14 rounded-full' />
              <div className='leading-7'>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 '>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>

        <div className='font-Nunito mx-auto grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center '>
          <img src="/work2.webp" alt="" className='p-4 md:order-2' />
          <div className='p-7 space-y-5 md:order-1 md:text-right'>
            <h5 className='tracking-wide font-thin'>Application</h5>
            <h2 className='text-4xl '>Miniwall Clock</h2>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4 md:justify-end'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp" alt="" className='w-14 rounded-full' />
              <div className='leading-7 md:text-start'>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 text-start'>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>
        <div className='font-Nunito mx-auto  grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center'>
          <img src="/work3.webp" alt="" className='p-4' />
          <div className='p-7 space-y-5'>
            <h5 className='tracking-wide font-thin'>UI/UX Desighn</h5>
            <h2 className='text-4xl font-light'>Avo Portfolio Agency</h2>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_3.jpg" alt="" className='w-14 rounded-full' />
              <div className='leading-7'>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 '>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>
        <div className='font-Nunito mx-auto  grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center'>
          <img src="/work4.webp" alt="" className='p-4 md:order-2'  />
          <div className='p-7 space-y-5 md:order-1 md:text-right'>
            <h5 className='tracking-wide font-thin'>Web Development</h5>
            <h2 className='text-4xl'>Hand Writing</h2>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4 md:justify-end'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp" alt="" className='w-14 rounded-full' />
              <div className='leading-7 md:text-start '>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 '>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>
        <div className='font-Nunito mx-auto grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center '>
          <img src="/work5.webp" alt="" className='p-4' />
          <div className='p-7 space-y-5'>
            <h5 className='tracking-wide font-thin'>Illustration</h5>
            <h2 className='text-4xl font-light'>Keyboard</h2>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_3.jpg" alt="" className='w-14 rounded-full' />
              <div className='leading-7 '>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 '>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>
        <div className='font-Nunito mx-auto grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center '>
          <img src="/work6.jpg" alt="" className='p-4 md:order-2' />
          <div className='p-7 space-y-5 md:order-1 md:text-right'>
            <h5 className='tracking-wide font-thin'>Web Development</h5>
            <h2 className='text-4xl font-light'>Spiral</h2>
            <p className='text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='flex space-x-4 md:justify-end'>
              <img src="https://preview.colorlib.com/theme/avo/images/person_3.jpg" alt="" className='w-14 rounded-full' />
              <div className='leading-7 md:text-start'>
                <h4>Jamie Jonson</h4>
                <span className='text-gray-400 '>avo.com</span>
              </div>
            </div>
            <p><a href="" className='rounded-sm cursor-pointer border-2 tracking-wider px-5 border-gray-300'>View Portfolio</a></p>
          </div>
        </div>
      </div>


    </section>



    <footer className='bg-black w-[100%] h-full'>
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

export default work
