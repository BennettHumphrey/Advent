import React from 'react'
import { urlFor } from '../client';

const PopUp = ({data, setOpen}) => {

    // const imageSource = (x) => {
    //     return 00 += x
    // }

    console.log(`data ${JSON.stringify(data)}`)

  return (
    <div className='absolute top-0 w-screen h-screen bg-[#00000090]' >
        <div className='relative mx-auto flex justify-center w-[300px] py-3' >
            <div className='w-full' >
                <div className='absolute bg-red-500 rounded-full text-center 
                h-10 w-10 flex items-center justify-center
                right-1 top-1 hover:cursor-pointer'
                    onPointerUp={() => {
                        setOpen(false);
                    }} >
                    
                    <p className='text-xl select-none' >X</p>
                </div>
                <div className='bg-[#EA5D8D] w-full pt-2 pl-4 pb-3 h-[40vh]' >
                    <img className='w-2/5 rounded-full mb-3' src={urlFor(data.artistImage)} alt="Face" />
                    <h4 className='text-5xl font-bold' >Dec {data.id + 1}</h4>
                    <h5 className='pr-[10%]' >{data.name}</h5>
                    <p className='text-black' >{data.workTitle}</p>
                </div>
                <div className='h-[54%]' >
                    <img className='overflow-hidden h-full w-full' src={urlFor(data.work)} alt="bears" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp