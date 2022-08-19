import React, { useState } from 'react';
import { Link } from 'react-scroll';

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='flex flex-col h-screen'>
      <div className='hidden lg:flex justify-between items-center pt-12 font-semibold px-1'>
        <div>
          Computer Science<br /> at McMaster University
        </div>
        <div>
          Currently Front-End Developer<br />Co-Op at Paradigm Electronics
        </div>
        <div>
          Based in Toronto<br />Canada
        </div>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className='font-semibold'>
              About /
            </button>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <button className='font-semibold'>
              &nbsp;Experience /
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <button className='font-semibold'>
              &nbsp;Projects
            </button>
          </Link>
        </div>
      </div>
      <div className='flex pt-12 items-center justify-between'>
        <div className='title font-title font-bold text-2xl lg:text-7xl'>
          FARZAN ALI FAISAL
        </div>
        <div className='lg:hidden flex flex-col items-end'>
          <button className='font-semibold' onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
          {menuOpen && <div className='flex flex-col items-end absolute mt-9'>
            <Link to="about" smooth={true} duration={500}>
              <button className='font-semibold'>
                About
              </button>
            </Link>
            <Link to="experience" smooth={true} duration={500}>
              <button className='font-semibold'>
                Experience
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <button className='font-semibold'>
                Projects
              </button>
            </Link>
          </div>}
        </div>
      </div>
      <div className='flex flex-row h-full'>
        <div className='flex justify-center items-center text-xl w-1/2 text-center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam, voluptates nesciunt assumenda omnis iste perspiciatis
        </div>
        <div className='flex justify-center items-center'>
          {/* <img src="img/profile-pic.png" className='ml-22 object-scale-down w-1/2'></img> */}
        </div>
      </div>
    </div>
  )
}