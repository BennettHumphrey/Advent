import React from 'react'
import { useWindowWidth } from './useWindowWidth';
import { setBG } from '../utils/setBG';

const Card = ({ i, x, setOpen, setCard, date, glow }) => {

  const width = useWindowWidth();

  return (
      <div className={`h-full w-full flex duration-500 ease-in-out 
    
      ${x.id === 24 ? "justify-center items-center" : width < 640 ? x.mobile.pos : x.desktop.pos}

      ${x.id <= date - 1 && "hover:cursor-pointer"}

      ${setBG(x.id, date, glow, width)}`} 

      //Because for some reason this doesn't work in tailwind...

      style={width < 640 ? 
        {gridRowStart: x.mobile.rows[0], gridRowEnd: x.mobile.rows[1],
        gridColumnStart: x.mobile.cols[0], gridColumnEnd: x.mobile.cols[1]}
         : 
        {gridRowStart: x.desktop.rows[0], gridRowEnd: x.desktop.rows[1],
        gridColumnStart: x.desktop.cols[0], gridColumnEnd: x.desktop.cols[1]}} 

      onPointerUp={() => {
        setCard(i);
        {i+1 <= date && setOpen(true)}}}>

            <p className={`relative inline text-4xl font-extrabold p-3`} >{x.id === 24 ? "It's Christmas!" : i+1}</p>

      </div>
  )
}



export default Card