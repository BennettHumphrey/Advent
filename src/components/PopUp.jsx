import React from 'react'
import { urlFor } from '../client';

const PopUp = ({data, setOpen}) => {

    if(!data) data = {
        id: null,
        name: "Data not found",
        workTitle: "Here's some bears",
        artistImage: "https://placebear.com/g/200/200",
        work: "https://placebear.com/g/600/600",
      }

  return (
    <div className='absolute top-0 w-screen h-screen bg-[#00000090]' >
        <div className='relative mx-auto flex justify-center w-[90vw] max-w-[400px] py-3 
                        sm:max-w-[85vw] sm:h-full' >
            <div className='w-full flex flex-col sm:flex-row sm:items-center' >
                <div className='absolute rounded-full text-center 
                h-10 w-10 flex items-center justify-center
                right-1 top-1 hover:cursor-pointer'
                    onPointerUp={() => {
                        setOpen(false);
                    }} >
                    
                    <p className='text-xl select-none' >X</p>
                </div>
                <div className='bg-[#EA5D8D] w-full pt-2 pl-[6%] pb-3 h-[40vh] 
                                sm:h-[70vh] sm:w-[40vw] sm:flex sm:items-center sm:pt-[12vh] sm:flex-col sm:pl-0' >
                    <img className='w-2/5 max-w-[136px] rounded-full mb-3' src={data.id ? urlFor(data.artistImage) :  data.artistImage} alt="Artist image" />
                    <h4 className='text-5xl font-bold' >{data.id === -1 ? "Error" : `Dec ${data.id + 1}`}</h4>
                    <h5 className='pr-[10%]' >{data.name}</h5>
                    <p className='text-black' >{data.workTitle}</p>
                </div>
                <div className='h-[90vw] max-h-[55vh] sm:h-[70vh] sm:max-h-[70vh] sm:w-[40vw]' >
                    <img className='overflow-hidden h-full w-full' src={data.id ? urlFor(data.work) : data.work} alt="Artist's work" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp