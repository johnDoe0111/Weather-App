import '../styles/App.css'
import Input from './Input';
import Card from './Card';
import { useEffect, useState } from 'react';

function App() {
  const [city, setSity] = useState([])
  const [search, setSearch] = useState('Grozny')
  const [error, setError] = useState('')

  const url = `https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${search}`
  
  async function func () {
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      setSity([...city, data])
      setSearch('')
      setError('')
    } else {
      setSearch('')
      setError(data.error.message)
    }
  }

  useEffect(() => {
    func()
  }, [])

  return (
    <div className="App">
      <div className='app-wrapper'>
        <Input func={func} search={search} setSearch={setSearch}/>
        <div className='error-block'>{error}</div>
        <Card city ={city} setSity={setSity}/>
      </div>
    </div>
  );
}

export default App;