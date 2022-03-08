import React, { useEffect, useState } from 'react'
import DoggieList from './components/DoggieList'
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
    console.log('Hi Im use Effect')
    const getAllDoggies = async () => {
      const pupsArray = await fetchDoggos()
      setPuppies(pupsArray)
    }
    getAllDoggies()
  }, [])

  console.log(puppies)

  return (
    <div>
      <DoggieList pups={puppies} />
    </div>
  )
}

export default App
