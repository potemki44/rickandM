import { useEffect, useState } from 'react'
import { useLocationApi } from './components/useLocationApi'
import './App.css'
import axios from 'axios'
import { LocationCard } from './components/LocationCard'
import Cardcharacter from './components/Cardcharacter'
import { InputSearch } from './components/InputSearch'
import banner from "../src/img/rick.jpg"
import { Loading } from './components/Loading'



function App() {


  const [loader,setloader] = useState(false)
  const [searchLocation, setsearchLocation] = useState()
  const location = useLocationApi(searchLocation)
console.log(searchLocation)

  return (
    <div className="App">
     
    
<div className='searcher'>
  <LocationCard location={location}/>
      <InputSearch setSearchLocation={setsearchLocation} /></div>
     
      
      
       {loader ? <Loading/> :location?.residents.map(resident => (
          <Cardcharacter resident={resident}
            key={resident} />
        ))}

      
    </div>
  )
}

export default App
