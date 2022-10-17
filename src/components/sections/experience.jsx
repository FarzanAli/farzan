import React, { useState } from 'react';
import Carousel from '../carousel/carousel';

export const Experience = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='h-fit lg:mt-24 lg:pt-2 w-full' id="experience">
      <div className='text-2xl lg:text-5xl mt-10 pb-10 lg:pb-24'>
        Experience
      </div>
      <Carousel
      options={[
        {
          name: {value: "Paradigm", font: "font-neuropa", color: "text-paradigm"},
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat est, eveniet fugit ex recusandae, nihil architecto perferendis ab quidem obcaecati ipsam. Molestias, dicta eveniet voluptas explicabo maiores dolore. Itaque, assumenda!",
          // description: "Built multiple customer and business facing front-end websites using",
          technologies: "React.js, Redux, Tailwindcss, Axios, Mock Service Worker, javascript, sass, formik, material UI"
        },
        {
          name: {value: "SPLINTERLANDS", font: "font-advert", color: "text-splinterlands"},
          description: "Built price history graphs for one of Splinterland’s online card (NFT) trading markets using React.js, Chart.js, JavaScript and HTML/CSS which allowed the market to stand out amongst others with this unique functionality and its practicality. Collaborated as a team of 5 on a daily basis to build and integrate various modules of the end deliverable during development, integration testing, implementation, and validations (end-to-end). Setup MySQL database cluster for the market to store price history tables. Setup Cron Jobs on DigitalOcean Droplets (Linux-based VMs) using a Python script to retrieve data from a REST API and SQL commands to keep the database updated (utilized GET and POST requests).",
          technologies: "React.js, Chart.js, JavaScript, Python, SQL, HTML/CSS, REST API"
        }
      ]}
      selected={selected}
      setSelected={setSelected}
      />
    </div>
  )
}