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

  //To fetch from Sanity

  async function getPosts() {
    const posts = await SanityClient.fetch(`*[id<${date+1}] | order(id asc)`);
    setAvailableCards(posts)
    console.log(JSON.stringify(availableCards[1]))
  };
  
  //Used to adjust the date

  useEffect(() => {
    setDate(currentDate.getDate() + dateAdjust)
  }, [dateAdjust]);

  //Pulls all available cards from Sanity on load, updates on changing the date

  useEffect(() => {
    getPosts();
  }, [date]);

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

export default Cards