import React, { useEffect, useState } from 'react'
import Navbar from '../models/Navbar'
import Spinner from './Spinner';

const Home = () => {
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 3000);

  },[])
 

 
  return (

    <>
    {loading ? ( 
    <Spinner/>
  ) : ( 
    <>
      <Navbar />
    
      <section className='overflow-x-hidden flex flex-col  items-center justify-center text-center animate-slide-up '>
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


    
      <section className='overflow-x-hidden space-y-10 w-full'>
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


      <section className='overflow-x-hidden flex pb-24 relative bg-gray-100 w-full h-full md:[clip-path:polygon(35%_0%,_100%_6%,_100%_94%,_66%_100%,_0%_94%,_0%_7%)] [clip-path:polygon(38%_0%,_100%_2%,_100%_98%,_62%_100%,_0%_98%,_0%_1%)]'>
        <div className='mt-40 '>
          <h1 className='flex text-4xl font-Nunito font-black text-zinc-800 justify-center  animate-slide-up'>OUR WORKS</h1>
          <div className='font-Nunito mx-auto w-[100%] grid md:grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] md:items-center'>
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
            <img src="/work4.webp" alt="" className='p-4 md:order-2' />
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



    


      <section className='overflow-x-hidden relative w-full h-screen p-4 md:p- md:h-full md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto'>

        <div className='object-cover bg-cover bg-center p-5 md:py-16 md:px-12 bg-[url(/bg1.jpg)] '>

          <div className=' font-Nunito space-y-3   animate-slide-up md:w-[45%] '>
            <p className=' text-red-600'>Get Started</p>
            <h1 className=' text-white text-3xl'>Fill in the brief and get the project estimate</h1>
            <p className='text-gray-400 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='bg-red-600 text-white rounded-sm px-2 py-1'>Get Started</button>
          </div>
        </div>
      </section>

      <section className='overflow-x-hidden w-full h-full bg-gray-100 pb-10 md:[clip-path:polygon(35%_0%,_100%_6%,_100%_94%,_66%_100%,_0_94%,_0_7%)] [clip-path:polygon(38%_0%,_100%_2%,_100%_98%,_62%_100%,_0%_98%,_0%_1%)]'>

        <h1 className='flex text-4xl font-Nunito font-black text-zinc-800  justify-center py-20 animate-slide-up'>RECENT BLOG</h1>
        <div className='md:grid md:grid-cols-4 md:w-[95%] lg:w-[80%] xl:w-[70%] md:mx-auto '>
          <div className='font-Nunito p-4 space-y-7   mt-6'>
            <h3 className='tracking-wide text-[19px] font-medium'>Amplify your blockchain team </h3>
            <img src="/blog1.jpg" alt="" className='w-[100%] h-[44vh] object-cover bg-cover bg-center ' />
            <div><p className='tracking-wider text-sm'>JUNE 01, 2020  ADMIN <i class="fa-solid fa-comment"></i> 3</p> </div>
            <p className='text-gray-400 leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>

          <div className='font-Nunito p-4 space-y-7  mt-6'>
            <h3 className='tracking-wide text-[19px] font-medium'>Amplify your blockchain team </h3>
            <img src="/blog2.jpg" alt="" className='w-[100%] h-[44vh] object-cover bg-cover bg-center ' />
            <div><p className='tracking-wider text-sm'>JUNE 01, 2020  ADMIN <i class="fa-solid fa-comment"></i> 3</p> </div>
            <p className='text-gray-400 leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
          <div className='font-Nunito p-4 space-y-7  mt-6 '>
            <h3 className='tracking-wide text-[19px] font-medium'>Amplify your blockchain team </h3>
            <img src="/blog3.jpg" alt="" className='w-[100%] h-[44vh] object-cover bg-cover bg-center ' />
            <div><p className='tracking-wider text-sm'>JUNE 01, 2020  ADMIN <i class="fa-solid fa-comment"></i> 3</p> </div>
            <p className='text-gray-400 leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
          <div className='font-Nunito p-4 space-y-7  mt-6'>
            <h3 className='tracking-wide text-[19px] font-medium'>Amplify your blockchain team </h3>
            <img src="/blog4.jpg" alt="" className='w-[100%] h-[44vh] object-cover bg-cover bg-center ' />
            <div><p className='tracking-wider text-sm'>JUNE 01, 2020  ADMIN <i class="fa-solid fa-comment"></i> 3</p> </div>
            <p className='text-gray-400 leading-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
          </div>
        </div>

      </section>


      <footer className='bg-black w-full h-full overflow-x-hidden'>
        <div className='p-4 space-y-10 w-full md:grid md:grid-cols-5 md:gap-4 lg:w-[70%] md:mx-auto '>
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

)}

    </>
  )
}

export default Home
