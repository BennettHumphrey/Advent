import React from 'react'
import { urlFor } from '../client';
import { mockData } from '../utils/mockData';
import { randomNumber } from '../utils/randomNumber';

const PopUp = ({data, setOpen}) => {

    //If a Sanity error occurs, returns some bears instead.
    if(!data) data = mockData(randomNumber(5))

  return (
    <div className='absolute top-0 w-screen h-screen bg-[#00000090]' >
        <div className='relative mx-auto flex justify-center w-[90vw] max-w-[400px] py-3 
                        sm:max-w-[85vw] sm:h-full' >
            <div className='w-full flex flex-col sm:flex-row sm:items-center' >
                <div className='absolute rounded-full text-center 
                h-10 w-10 flex items-center justify-center
                right-[-10px] top-1 hover:cursor-pointer z-10 bg-white text-black
                sm:top-[102px] sm:right-[35px]'
                    onPointerUp={() => {
                        setOpen(false);
                    }} >
                    
                    <p className='text-xl select-none' >X</p>
                </div>
                <div className='bg-[#EA5D8D] w-full pt-2 pl-[6%] pb-3 h-[40vh] relative
                                sm:h-[70vh] sm:w-[30vw] sm:flex sm:pt-[12vh] sm:pl-0 sm:pb-[1%] sm:flex-col justify-end' >
                    <img className='w-2/5 max-w-[136px] rounded-full mb-3 relative
                                    sm:order-4 sm:rounded-none sm:m-0 sm:max-w-none sm:w-4/5 sm:self-center' 
                        src={data.id ? urlFor(data.artistImage) :  data.artistImage} 
                        alt="Artist image" />
                    <h4 className='text-5xl font-bold sm:order-1 sm:pl-[11%]' >{data.id === null ? "Error" : `Dec ${data.id}`}</h4>
                    <h5 className='pr-[10%] sm:pr-[5px] sm:py-3 sm:order-2 sm:pl-[11%] sm:text-xl' >{data.name}</h5>
                    <p className='text-black sm:order-3 sm:pl-[11%] sm:text-lg' >{data.workTitle}</p>
                </div>
                <div className='h-[90vw] max-h-[55vh] sm:h-[70vh] sm:max-h-[70vh] sm:w-[50vw]' >
                    <img className='overflow-hidden h-full w-full' src={data.id ? urlFor(data.work) : data.work} alt="Artist's work" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp

//1 2 3
//2 1 3