import React from 'react'

const Header = ({ setDateAdjust, dateAdjust, date }) => {

  const newDate = new Date()
  const currentDate = newDate.getDate()

  return (
    <div className='pt-3 relative pb-3 bg-transparent'>
      <div className='absolute top-[11px] flex flex-col ml-1 z-10' >
        <p className='text-center'
        onPointerUp={(x) => {
          if (currentDate + dateAdjust >= 25) return;
          setDateAdjust(dateAdjust + 1)
        }}
        // onTouchEnd={() => {
        //   setDateAdjust(dateAdjust + 1)
        // }} 
        >+</p>
        <p className='text-center text-xs' >{date}</p>
        <p className='text-center'
        onPointerUp={(x) => {
          if (currentDate + dateAdjust <= 1) return;
          setDateAdjust(dateAdjust - 1)
        }}
        // onTouchEnd={() => {
        //   setDateAdjust(dateAdjust - 1)
        // }} 
        >-</p>
      </div>
      <h1 className='text-2xl text-center' >Artists Advent</h1>
      <div className='w-4/5 h-px bg-white m-auto my-4' />
      <div  >
        <h3 className='text-2xl font-bold text-center' >Advent Calendar</h3>
        <p className='mt-3 text-center' >Click each day for artwork!</p>
      </div>
    </div>
  )
}

export default Header