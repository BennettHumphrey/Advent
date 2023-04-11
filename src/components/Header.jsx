import React from 'react'

const Header = ({ setDateAdjust, dateAdjust }) => {
  return (
    <div className='pt-3 relative' >
      <div className='absolute top-[11px] flex flex-col ml-1' >
        <p className='text-center'
        onPointerUp={() => {
          setDateAdjust(dateAdjust + 1)
        }}
        // onTouchEnd={() => {
        //   setDateAdjust(dateAdjust + 1)
        // }} 
        >+</p>
        <p className='text-center text-xs' >Date</p>
        <p className='text-center'
        onPointerUp={() => {
          setDateAdjust(dateAdjust - 1)
        }}
        // onTouchEnd={() => {
        //   setDateAdjust(dateAdjust - 1)
        // }} 
        >-</p>
      </div>
      <h1 className='text-3xl text-center' >BENNETT</h1>
      <div className='w-4/5 h-px bg-white m-auto my-4' />
      <div  >
        <h3 className='text-2xl font-bold text-center' >Advent Calendar</h3>
        <p className='mt-3 text-center' >Click each day for a surprise!</p>
      </div>
    </div>
  )
}

export default Header