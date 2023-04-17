import React, { useEffect, useState } from 'react'
import Card from './Card'
import PopUp from './PopUp'
import { SanityClient } from '../client'
import { cardsLayout } from './cardsLayout'
import { useWindowWidth } from './useWindowWidth'

const Cards = ({ dateAdjust, date, setDate, glow }) => {

  const [open, setOpen] = useState(false);
  const [card, setCard] = useState(1);
  const [availableCards, setAvailableCards] = useState([]);

  const currentDate = new Date();

  async function getPosts() {
    const posts = await SanityClient.fetch(`*[id<${date}] | order(id asc)`,);
    setAvailableCards(posts)
  };
  
  useEffect(() => {
    setDate(currentDate.getDate() + dateAdjust)
  }, [dateAdjust]);

  useEffect(() => {
    getPosts();
  }, [date]);

//12x5

  return (
    <div className='flex justify-center' >
      <div className='grid gap-4 bg-transparent
      grid-rows-[repeat(30,17vw)] grid-cols-[repeat(2,42vw)]
      sm:grid-rows-[repeat(12,8vw)] sm:grid-cols-[repeat(5,17.5vw)]' >
        {cardsLayout.map((x, i) => (
            <Card glow={glow} x={x} key={i} date={date} i={i} setOpen={setOpen} setCard={setCard} />
        ))}
      </div>
      {open && <PopUp data={availableCards[card]} setOpen={setOpen} />}
    </div>
  )
}

// 2x29

export default Cards