import React from 'react';
import dayforce from './dayforce.png'
import useSound from 'use-sound';
import buttonSound from '../audio/button-1.mp3'

const Carousel = ({ options, selected, setSelected }) => {
    const logoMap = {
        "dayforce": dayforce
    }
    const [play] = useSound(buttonSound);
    return (
        <div className='lg:pr-20 flex flex-col items-center'>
            <div className='flex flex-row items-center overflow-x-auto'>
                {options.map((value, id) => {
                    return value.name.value ? (
                        <div
                            key={id}
                            className={`cursor-pointer ${value.name.font} ${selected !== id ? 'opacity-20 hover:opacity-100 hover:transition-all' : 'drop-shadow-md'} text-2xl sm:text-3xl lg:text-5xl shrink-0 mr-3 lg:mr-10 mb-4 ${value.name.color}`}
                            onClick={() => {
                                setSelected(id);
                                play()
                            }}
                        >
                            {value.name.value}
                        </div>
                    ) : (
                        <div
                            key={id}
                            className={`cursor-pointer ${selected !== id ? 'opacity-20 hover:opacity-100 hover:transition-all' : 'transition drop-shadow-md'} hover:animate-none text-2xl sm:text-3xl lg:text-5xl shrink-0 mr-3 lg:mr-10 mb-4`}
                            onClick={() => {
                                setSelected(id);
                                play()
                            }}
                        >
                            <img src={logoMap[value.name.logo]} alt="logo" className='text-2xl sm:text-3xl lg:text-5xl h-8 sm:h-12 lg:h-16' />
                        </div>
                    );
                })}
            </div>
            <div className="py-10 lg:py-20 lg:m-5">
                <div className='text-sm md:text-md lg:text-2xl pb-4'>
                    {options[selected].title}
                </div>
                <ul className='text-xs md:text-sm lg:text-xl list-inside space-y-2'>
                    {options[selected].description.map((desc, id) => (
                        <li key={id} className='flex items-center'>
                            <div className='inline mr-4'>{"🚀"}</div>{desc}
                        </li>
                    ))}
                </ul>

                {options[selected].keyAchievements.length > 0 && (
                    <>
                        <div className='text-xs md:text-sm lg:text-xl pt-7'>
                            Key Achievements:
                        </div>
                        <ul className='text-xs md:text-sm lg:text-xl list-inside pt-2 space-y-2'>
                            {options[selected].keyAchievements.map((achievement, id) => (
                                <li key={id} className='flex items-center'>
                                    <div className='inline mr-4'>{"✅"}</div>{achievement}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <br />
                <div className='text-xs md:text-sm lg:text-xl'>
                    <p className='inline font-medium'>Technologies: </p>{options[selected].technologies}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
