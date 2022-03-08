import React, { useEffect, useState } from 'react'

const AddDog = ({ puppies, setPuppies }) => {
  // Initialize State Variables
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')

  // This handle Submit is fired when our button (type=submit) is clicked
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // making a POST request to our API to add a puppy
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2202-FTB-ET-WEB-FT/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // we need to send our state variables in an Object which gets
          // converted to JSON, so our API can read it
          body: JSON.stringify({
            name,
            breed,
          }),
        }
      )
      // Here we are deconsructing the data property off of the API's response
      const { data } = await response.json()
      const newPuppy = data.newPlayer
      // Here we use the spread operator (...) to make a newArray
      // and add our newly made puppy to the newPuppesArray
      const newPuppiesArray = [...puppies, newPuppy]
      // Now we can update our puppies array (Remember these values live in App.js)
      setPuppies(newPuppiesArray)
    } catch (err) {
      console.error(err)
    }
  }

  // Creating a function to pass to our onChange handler on our input field below
  const onBreedChange = (e) => {
    // Update our breed variable in state
    setBreed(e.target.value)
  }
  // This use Effect takes two variables in the dependency array,
  // and watches those two values. When either name, or breed
  // this useEffect will fire
  useEffect(() => {
    console.log({
      name,
      breed,
    })
  }, [name, breed])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={breed}
          type="text"
          placeholder="breed"
          onChange={onBreedChange}
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}

export default AddDog
