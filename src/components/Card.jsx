import React from 'react'
import PopUp from './PopUp'

const Card = ({ i, setOpen, setCard, date }) => {


  return (
    <>
      <div className='' >
          <div className={`h-full w-full border-red-500 border hover:cursor-pointer ${i < date && "bg-green-500"}`}
            onPointerUp={() => {
              setCard(i);
              {i < date && setOpen(true);}
            }} >
            <p className='text-center text-3xl pt-1/5' >Card {i+1}</p>
          </div>
      </div>
    </>
  )
}

export default Card