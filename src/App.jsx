import React, { useEffect, useState } from 'react'
import DoggieList from './components/DoggieList'
import AddDog from './components/AddDog'
// Static information can stay OUTSIDE of a component
const URL =
  'https://fsa-puppy-bowl.herokuapp.com/api/2202-FTB-ET-WEB-FT/players'

const dummyDoggos = [
  { name: 'Ricky', breed: 'smol' },
  { name: 'Jerry', breed: 'growly' },
  { name: 'Stanley', breed: 'great-dane' },
]

const App = () => {
  const [puppies, setPuppies] = useState([])
  const [favPupper, setFavPupper] = useState({})

  const fetchDoggos = async () => {
    try {
      const response = await fetch(URL)
      const { data } = await response.json()
      return data.players
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log('Hello from useEffect()')
    const getAllDoggies = async () => {
      const pupsArray = await fetchDoggos()
      setPuppies(pupsArray)
    }
    getAllDoggies()
  }, [])

  console.log('Fav Pupper is:', favPupper)

  return (
    <div>
      <AddDog puppies={puppies} setPuppies={setPuppies} />
      {favPupper.name ? <h3>{favPupper.name}</h3> : <h3>No Fav Pup</h3>}
      <DoggieList pups={puppies} setFavPupper={setFavPupper} />
    </div>
  )
}

export default App
