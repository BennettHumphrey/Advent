import React, { useEffect, useState } from 'react'
import Card from './Card'
import PopUp from './PopUp'
import { SanityClient } from '../client'

const Cards = ({ dateAdjust }) => {

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(0);
  const [card, setCard] = useState(1);
  const [availableCards, setAvailableCards] = useState([]);

  const currentDate = new Date()

  async function getPosts() {
    const posts = await SanityClient.fetch(`*[id<${date}] | order(id asc)`,);
    setAvailableCards(posts)
  }

  let cardsLayout = []
  for(let i = 0; i < 25; i++) {
    cardsLayout.push(i)
  }
  
  useEffect(() => {
    setDate(currentDate.getDate() + dateAdjust)
  }, [dateAdjust])

  useEffect(() => {
    getPosts();
  }, [date])

  console.log(`date: ${currentDate.getDate()}`)

  console.log(availableCards)

  return (
    <>
      <div className='grid gap-2 grid-rows-29 grid-cols-2' >
        {cardsLayout.map((x, i) => (
            <Card key={i} date={date} i={i} setOpen={setOpen} setCard={setCard} />
        ))}
      </div>
      {open && <PopUp data={availableCards[card]} setOpen={setOpen} />}
    </>
  )
}

// 2x29

export default Cards