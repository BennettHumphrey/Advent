import { useState } from 'react';
import Cards from './components/Cards'
import Header from './components/Header'

function App() {

  const [dateAdjust, setDateAdjust] = useState(0);
  const [date, setDate] = useState(0);
  const [glow, setGlow] = useState(false);


  return (
    <div className='bg-transparent text-white' 

    //Makes the cards flash when clicking

    onPointerDown={() => {
      setGlow(true);
      setTimeout(() => {
        setGlow(false)
      }, 300)
    }}>

    {/* Background */}

      <video autoPlay muted loop
      className='absolute top-0 left-0 z-[-1] h-full w-full object-cover' >
        <source src="imgs/bg.mp4" type="video/mp4"/>
      </video>

      <Header setDateAdjust={setDateAdjust} date={date} dateAdjust={dateAdjust} />
      <Cards glow={glow} date={date} setDate={setDate} dateAdjust={dateAdjust} />
      
    </div>
  )
}

export default App
