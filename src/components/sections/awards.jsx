import React from 'react'

export const Awards = () => {
  const awards = [
    { name: "MIST Toronto’s Math Olympics", description: ["Finished 3rd in a Math Olympics competition at Toronto Muslim Interscholastic Tournament"]},
    { name: "picoCTF’s CMU Cybersecurity Competition", description: ["Ranked in the top 8% among 40,000 competitors worldwide for solving challenging security and hacking problems"]},
  ]
  return (
    <div className='mb-12'>
      <p className='text-2xl lg:text-5xl pt-10 lg:pt-24 pb-10'>Awards & Achievements</p>
      <div className='h-fit flex flex-col items-center justify-center lg:inline' id="awards">
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {awards.map((value, id) =>
            <div key={id} className='col-span-1 flex flex-col justify-between m-5 p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
              <div className='font-medium text-lg lg:text-xl'>
                {value.name}
              </div>  
              <ul className={'text-xs md:text-sm '.concat(value.description.length === 1 ? 'list-none' : 'pl-2 list-disc')}>
                {value.description.map((value, id) => <li key={id} className='pt-2'>{value}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}