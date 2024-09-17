import React from 'react'
import {BiLinkExternal} from 'react-icons/bi'

export const Projects = () => {
  const projects = [
    {
      link: "https://github.com/FarzanAli/CallEm",
      name: "CallEm",
      description: [
        "Developed an iOS app allowing users to visually navigate customer service menus without listening to voice prompts, streamlining menu selection. Created a Python backend using the Twilio Voice API to handle call functionality.",
        "Automated the process of retrieving call menus with a React app, using Twilio, faster-whisper for live transcription, and spaCy for NLP to understand and traverse menu options, storing the results in an n-ary tree structure."
      ],
      technologies: "Swift, Python, JavaScript, faster-whisper, spaCy, Twilio Voice API",
      span: "col-span-2"
    },
    { 
      link: "https://github.com/FarzanAli/arduino-autopilot",
      name: "Arduino Autopilot",
      description: [
        "Built a PID controller based autopilot system (roll & pitch axis) for remote controlled airplanes using a microcontroller (Arduino) and an inertial motion unit (mpu-6050).",
      ],
      technologies: "C++, Arduino API",
      span: "col-span-1"
    },
    { 
      link: "https://typingbunny.com/",
      name: "Typingbunny",
      description: [
        "Constructed a full-stack application to track & visualize a user’s typing data (typing accuracy, speed, slowest typed words, etc). Front-end built using React and JavaScript. Back-end built using Node, Express, and MySQL.",
      ],
      technologies: "React, JavaScript, HTML/CSS, Linux OS",
      span: "col-span-1"
    },
    { 
      link: "https://github.com/FarzanAli/Measure",
      name: "Measure",
      description: [
        "Built project to help aid learning OpenCV",
        "A program that measures dimensions of 2d objects by using known dimensions of an aruco marker as reference"
      ],
      technologies: "OpenCV, Python",
      span: "col-span-1"
    },
    { 
      link: "https://github.com/FarzanAli/DeltaHacks8-FitDays",
      name: "DeltaHacks8-FitDays",
      description: [
        "Contributed to the creation of the Fitdays app using Python, NodeJS, Fitbit APIs, and Flask that uses biometric data from the Fitbit device and vocal responses to determine whether the user should go to the gym that day",
      ],
      technologies: "Python, Node.js, Fitbit APIs, Flask",
      span: "col-span-1"
    },
    {
      link: "https://farzanali.github.io/sorting-algorithm-visualizer/",
      name: "Sorting Algorithm Visualizer",
      description: [
        "A React app for visualizing, analyzing runtimes, and understanding big O notation of fundamental computer science sorting algorithms taught in class."
      ],
      technologies: "React, JavaScript",
      span: "col-span-1"
    },
    {
      link: "https://farzanali.itch.io/",
      name: "IMPULSE",
      description: [
        "Created a never-ending platformer video game with 2D vector physics and functionalities on the Unity Game Engine using C#"
      ],
      technologies: "Unity, C#",
      span: "col-span-1"
    },

  ]
  return (
    <div>
      <p className='text-2xl lg:text-5xl pt-10 pb-10'>Selected Projects</p>
      <div className='h-fit flex flex-col items-center justify-center lg:inline' id="projects">
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          {projects.map((value, id) =>
            <a key={id} href={value.link} className={`m-5 lg:${value.span}`}>
              <div className='h-full col-span-1 flex flex-col justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 cursor-pointer'>
                
                <div className='flex justify-between font-medium text-lg lg:text-xl'>
                  {value.name}
                  <BiLinkExternal/>
                </div>
                <ul className={'text-xs md:text-sm '.concat(value.description.length === 1 ? 'list-none' : 'pl-4 list-disc')}>
                  {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ut in placeat sapiente, laudantium at! Ullam aut quo sint, quis alias minus ex commodi quos error expedita assumenda dolore explicabo? */}
                  {value.description.map((value, id) => <li key={id} className='pt-2'>{value}</li>)}
                </ul>
                <div className='text-xs md:text-sm pt-4'>
                  Technologies: {value.technologies}
                </div>  
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}