// import { useState } from 'react'
import Header from './Components/Header'
import Screen from './Components/Screen'
import List from './Components/List'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [result, setResult] = useState()
  const [saved, setSaved] = useState(() => {
    const savedRecords = JSON.parse(localStorage.getItem('savedRecords'));
    return savedRecords || []
  })

  useEffect(() => {
    localStorage.setItem('savedRecords', JSON.stringify(saved));
  }, [saved]);

  return (
    <>
      <Header />
      <Screen result={result} setResult={setResult} saved={saved} setSaved={setSaved} />
      <List saved={saved} setSaved={setSaved} />
      <Footer />
    </>
  )
}

export default App
