import img from './../bg.png'
import Backgroundimg from './Components/Backgroundimg'
import Input from './Components/Input'
import Card from './Components/Card'
import { useState } from 'react'
function App() {
  const [location,setlocation]=useState('Ghaziabad')
  const APIKEY=import.meta.env.VITE_APIKEY
  return (
    <>
       <Backgroundimg imageUrl={img}>
         <Input setlocation={setlocation}/>
         <Card location={location} setlocation={setlocation} APIKEY={APIKEY}/>
       </Backgroundimg>
    </>
  )
} 

export default App
