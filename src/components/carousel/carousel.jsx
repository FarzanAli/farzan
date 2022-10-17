import React from 'react';

const Carousel = ({ options, selected, setSelected }) => {
    return (
        <div className='lg:pr-20 flex flex-col items-center'>
            <div className='flex flex-row items-center overflow-x-auto'>
                {options.map((value, id) =>
                    <div
                        key={id}
                        className={`cursor-pointer ${value.name.font} text-2xl sm:text-3xl lg:text-5xl shrink-0 mr-3 lg:mr-10 mb-4 ${id === selected ? `${value.name.color}` : `hover:${value.name.color} text-gray-300 duration-300`}`}
                        onClick={() => setSelected(id)}
                    >{value.name.value}</div>
                )}
            </div>
            <div className="py-10 lg:py-20 ">
                <ul className='text-xs md:text-sm lg:text-xl list-disc pl-4'>
                    {options[selected].description.map((value, id) => <li key={id}>{value}</li>)}
                </ul>
                <div className='text-xs md:text-sm lg:text-xl pt-4'>
                    Key Achievements:
                </div>
                <ul className='text-xs md:text-sm lg:text-xl list-disc pl-4 pt-2'>
                    {options[selected].keyAchievements.map((value, id) => <li key={id}>{value}</li>)}
                </ul>
                <br />
                <div className='text-xs md:text-sm lg:text-xl'>
                    <p className='inline font-medium'>Technologies: </p>{options[selected].technologies}
                </div>
            </div>
        </div>
    )
}

export default Carousel;