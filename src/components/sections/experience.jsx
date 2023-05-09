import React, { useState } from 'react';
import Carousel from '../carousel/carousel';

export const Experience = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='h-fit lg:mt-24 pt-20 lg:pt-2 w-full' id="experience">
      <div className='text-2xl lg:text-5xl pt-10 pb-10'>
        Experience
      </div>
      <Carousel
      options={[
        {
          name: {value: "Paradigm", font: "font-neuropa", color: "text-paradigm"},
          title: "Front-End Developer Co-Op",
          description: [
            "Developed the front-end for a wide range of software applications using React.js, Redux, JavaScript, Tailwindcss, Axios, Mock Service Worker, Sass, Formik, and MUI for the leading provider of high-performance speakers",
            "Worked closely with a 4-member team throughout the software development lifecycle within an Agile environment",
            "Participated in weekly standups, code reviews, sprint planning, etc., to aid with shift towards Agile software development methodology",
            "Gathered business requirements and supported software integration testing, implementation, and validation",
            "Accountable for responsive app design, controlling variables, and standardizing interfaces and component",
            "Created mock payloads for testing, integrated API calls, and leveraged regular expressions for user validation",
        ],
        keyAchievements: [
          "Produced multiple online forms and admin applications to streamline the customer registration, data management, and program logistics processes for a major program to upgrade the graphic cards in several aged product lines",
          "Built the front-end design of a website with multiple unique landing pages to advertise a new mobile app",
          "Earned overwhelmingly positive feedback at the end of the co-op for exceeding all performance expectations"
        ],
          // description: "Built multiple customer and business facing front-end websites using",
          technologies: "React.js, Redux, Tailwindcss, Axios, Mock Service Worker, javascript, sass, formik, material UI"
        },
        {
          name: {value: "SPLINTERLANDS", font: "font-advert", color: "text-splinterlands"},
          title: "Full-Stack Developer Intern",
          description: [
            "Tasked with building price history graphs to advance a new digital marketplace for the popular online card game that uses blockchain technology to trade and own non-fungible tokens (NFTs) with players across the globe",
            "Devised new website features and functionalities using React.js, Chart.js, JavaScript, HTML, and CSS",
            "Supported all aspects of the project timeline and established MySQL database cluster to store price history tables",
            "Created Cron Jobs and Python scripts to retrieve data from REST API and SQL commands and update database",
          ],
          keyAchievements: [
            "Played an integral role in helping the new NFT marketplace to become one of the most popular on the network by creating price history graphs that allowed the marketplace to attract untapped audiences and expand presence",
          ],
          technologies: "React.js, Chart.js, JavaScript, Python, SQL, HTML/CSS, REST API"
        }
      ]}
      selected={selected}
      setSelected={setSelected}
      />
    </div>
  )
}