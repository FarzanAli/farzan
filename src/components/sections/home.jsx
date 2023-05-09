import React, { Suspense, useState } from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiOutlinePhone, AiFillPhone } from 'react-icons/ai'
import { IoIosMail, IoLogoLinkedin } from 'react-icons/io'
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { Model } from './Plane';
// import { Model } from './ModelSpitfire';

export const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  let x = 400
  let y = 200
  let z = 200

  function Rig() {
    const { camera, mouse } = useThree()
    const vec = new Vector3()


    return useFrame(() => {
      camera.position.lerp(vec.set(x + (mouse.x * 0.1), y + (mouse.y * 0.1), z + (camera.position.z * 0.1)), 0.05)
      camera.lookAt(0, 0, 0)
    })
  }

  return (
    <div className='flex flex-col h-fit'>
      <div className='hidden lg:flex justify-between items-start pt-12 font-semibold'>
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
          {/* <Link to="about" smooth={true} duration={500}>
            <button className='font-semibold'>
              About /
            </button>
          </Link> */}
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
      <div className='flex pt-12 items-center justify-between pb-20 lg:pb-0'>
        <div className='title font-title font-bold text-2xl lg:text-7xl lg:pb-12'>
          FARZAN ALI FAISAL
        </div>
        <div className='lg:hidden flex flex-col items-end'>
          <button className='font-semibold' onClick={() => setMenuOpen(!menuOpen)}>
            Menu
          </button>
          {menuOpen && <div className='flex flex-col items-end absolute mt-9'>
            {/* <Link to="about" smooth={true} duration={500}>
              <button className='font-semibold'>
                About
              </button>
            </Link> */}
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
      <div className='flex lg:flex-row lg:justify-between lg:items-stretch flex-col-reverse items-center'>
        <div className='grid grid-cols-4 grid-rows-4 lg:grid-cols-3 lg:grid-rows-5 place-content-between h-52 lg:h-auto'>
          <a href="https://github.com/farzanali" className='col-span-1 w-16 fill-gray-400 hover:fill-gray-800 duration-300 justify-self-center lg:justify-self-start lg:ml-6 lg:mt-6 lg:-rotate-12 hover:drop-shadow-xl z-20'>
            <img src="img/icons/github-desktop-2021-05-20.png" width="100%"></img>
          </a>
          <a href="mailto:faisaf2@mcmaster.ca" className='lg:col-start-3 col-span-1 w-16 fill-gray-400 hover:fill-gray-800 duration-300 justify-self-center lg:justify-self-end lg:place-self-end lg:self-start lg:mr-6 lg:mt-6 lg:rotate-12 hover:drop-shadow-xl z-20'>
            <img src="img/icons/mail-icon.png" width="100%" ></img>
          </a>
          <div className='col-span-4 lg:col-span-3 text-xs md:text-sm lg:text-xl flex self-center items-center justify-center lg:mx-8 xl:mx-20 order-first lg:order-none'>
            Hi, I'm a student developer passionate about writing clean code.
          </div>
          <div className='order-1 lg:order-none col-span-4 lg:col-span-3 flex self-center mt-10 items-center justify-center'>
            <div className='absolute w-screen h-screen z-10 mt-32 lg:mt-0'>
              <Canvas camera={{ position: new Vector3(x, y, z), fov: 60 }}>
                <Rig />
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.3}/>
                <directionalLight position={[88, 61, -93]} intensity={1}/>
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <perspectiveCamera />
              </Canvas>
            </div>
          </div>
          <div className='pt-44 lg:pt-0 col-span-4 order-2 lg:order-none lg:col-span-3 text-xs md:text-sm lg:text-xl flex self-center items-center justify-center lg:mx-8 xl:mx-20'>
            I also like building & flying remote control airplanes!
          </div>
          <a href="https://www.linkedin.com/in/farzan-ali/" className='col-span-1 fill-gray-400 hover:fill-gray-800 duration-300 justify-self-center lg:justify-self-start lg:self-end lg:ml-6 lg:mb-6 lg:-rotate-12 hover:drop-shadow-xl z-20'>
            <img src="img/icons/linkedin-icon.png" width="57px" ></img>
          </a>

          <div className='col-span-1 lg:col-start-3 fill-gray-400 hover:fill-gray-800 duration-300 justify-self-center lg:justify-self-end lg:place-self-end lg:mr-6 lg:mb-6 lg:rotate-12 hover:drop-shadow-xl z-20'>
            <div className='flex flex-col lg:flex-row items-center'>
              <img onClick={() => setShowInfo(!showInfo)} src="img/icons/phone-icon.png" width="60px"></img>
              {showInfo && <div className='bg-slate-300 w-max p-2 rounded-md absolute mt-16 lg:mt-0 lg:ml-16'>+1 (416)-300-8698</div>}
            </div>
          </div>
          {/* <AiFillGithub size={60} className="fill-gray-400 hover:fill-gray-800 duration-300 col-span-1 justify-self-center lg:justify-self-start lg:ml-6 lg:mt-6 lg:-rotate-12" />
          <IoIosMail size={60} className="fill-gray-400 hover:fill-gray-800 duration-300 col-span-1 justify-self-center lg:justify-self-end lg:place-self-end lg:self-start lg:mr-6 lg:mt-6 lg:rotate-12" /> */}
          {/* <div className='col-span-4 flex items-center justify-center mx-8 xl:mx-20 order-first lg:order-none lg:col-span-2'>
            Hi, I'm a student developer passionate about writing clean code.
          </div> */}
          {/* <IoLogoLinkedin size={60} className="fill-gray-400 hover:fill-gray-800 duration-300 col-span-1 justify-self-center lg:justify-self-start lg:self-end lg:ml-6 lg:mb-6 lg:-rotate-12" />
          <AiOutlinePhone size={60} className="fill-gray-400 hover:fill-gray-800 duration-300 col-span-1 justify-self-center lg:justify-self-end lg:place-self-end lg:mr-6 lg:mb-6" /> */}
          {/* <AiFillPhone size={60} className="fill-gray-300 hover:fill-gray-800 duration-300"/> */}
        </div>

        <img src="img/profile-pic.jpeg" className='object-scale-down w-96 rounded-lg '></img>
      </div>
    </div >
  )
}