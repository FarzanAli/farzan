import React from 'react'

export const Projects = () => {
  const projects = [
    { 
      link: "https://typingbunny.com/",
      name: "Typingbunny",
      description: [
        "Constructed a website using React, JavaScript, HTML/CSS, and Linux OS to evaluate typing accuracy and speed",
        "Introduced features that allowed the user to manipulate the minimalistic design and modify settings and interfaces"
      ],
      technologies: "React, JavaScript, HTML/CSS, Linux OS"
    },
    {
      link: "https://farzanali.github.io/sorting-algorithm-visualizer/",
      name: "Sorting Algorithm Visualizer",
      description: [
        "Formed a React web application that visualizes elementary sorts into quicksort, insertion sort, and selection sort",
         "Implemented algorithms using JavaScript and shaped engaging user interface designs using HTML and CSS"
      ],
      technologies: "React, JavaScript"
    },
    {
      link: "https://farzanali.itch.io/",
      name: "IMPULSE",
      description: [
        "Founded a never-ending platformer with 2D vector physics and functionalities on the Unity Game Engine using C#"
      ],
      technologies: "Unity, C#"
    },
    { 
      link: "https://github.com/FarzanAli/Measure",
      name: "Measure",
      description: [
        "Built project to help aid learning OpenCV",
        "A program that measures dimensions of 2d objects by using known dimensions of an aruco marker as reference"
      ],
      technologies: "OpenCV, Python"
    },

  ]
  return (
    <div>
      <p className='text-2xl lg:text-5xl pt-10 pb-10'>Selected Projects</p>
      <div className='h-fit flex flex-col items-center justify-center lg:inline' id="projects">
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          {projects.map((value, id) =>
            <a key={id} href={value.link} className='m-5'>
              <div className='h-full col-span-1 flex flex-col justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 cursor-pointer'>
                <div className='font-medium text-lg lg:text-xl'>
                  {value.name}
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