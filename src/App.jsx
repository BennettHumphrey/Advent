import { useState } from 'react';
import Cards from './components/Cards'
import Header from './components/Header'

function App() {

  const [dateAdjust, setDateAdjust] = useState(0);

  return (
    <div className='bg-black text-white' >
      <Header setDateAdjust={setDateAdjust} dateAdjust={dateAdjust} />
      <Cards dateAdjust={dateAdjust} />
    </div>
  )
}

export default App
