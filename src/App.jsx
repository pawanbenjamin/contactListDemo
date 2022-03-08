import React, { useEffect, useState } from 'react'
import DoggieList from './components/DoggieList'
import AddDog from './components/AddDog'
// Static information can stay OUTSIDE of a component
const URL =
  'https://fsa-puppy-bowl.herokuapp.com/api/2202-FTB-ET-WEB-FT/players'
// dummy data
const dummyDoggos = [
  { name: 'Ricky', breed: 'smol' },
  { name: 'Jerry', breed: 'growly' },
  { name: 'Stanley', breed: 'great-dane' },
]

const App = () => {
  // Initialize some state variables
  const [puppies, setPuppies] = useState([])
  const [favPupper, setFavPupper] = useState({})

  // We define our AJAX helper function to hit our API's url
  // and simply returns the players array from the API
  const fetchDoggos = async () => {
    try {
      const response = await fetch(URL)
      const { data } = await response.json()
      // Notice we are only returning this value (we will catch in in our useEffect)
      return data.players
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // Because useEffect can't take an async function, we need to make one in here
    // and call our fetchDoggoes function inside of it
    const getAllDoggies = async () => {
      // we're catching the response in a pups array variable
      const pupsArray = await fetchDoggos()
      // we can now setPuppies with the data from our API
      setPuppies(pupsArray)
    }
    // Don't forget we need to call the function we just defined
    getAllDoggies()
  }, [])

  return (
    <div>
      <AddDog puppies={puppies} setPuppies={setPuppies} />
      {
        // Remember the syntax of a ternary operator
        // If the first statement is true ? then return this : or return this
        favPupper.name ? (
          <div>
            <h3>My Fav Pupper is:</h3>
            <h5>{favPupper.name}</h5>
          </div>
        ) : (
          <h3>No Fav Pup</h3>
        )
      }
      <DoggieList pups={puppies} setFavPupper={setFavPupper} />
    </div>
  )
}

export default App
