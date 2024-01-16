import Header from './Components/Header'
import Screen from './Components/Screen'
import List from './Components/List'
import Footer from './Components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [result, setResult] = useState()
  const [saved, setSaved] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:10000/api/saved');
        setSaved(response.data);
      } catch (error) {
        console.error('Error getting data ', error);
      }
    };

    fetchData();
  }, []);

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
