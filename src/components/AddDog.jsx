import React, { useEffect, useState } from 'react'

const AddDog = ({ puppies, setPuppies }) => {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        'https://fsa-puppy-bowl.herokuapp.com/api/2202-FTB-ET-WEB-FT/players',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            breed,
          }),
        }
      )
      const { data } = await response.json()
      const newPuppy = data.newPlayer
      const newPuppyObj = [...puppies, newPuppy]
      setPuppies(newPuppyObj)
    } catch (err) {
      console.error(err)
    }
  }

  const onBreedChange = (e) => {
    setBreed(e.target.value)
  }

  useEffect(() => {
    console.log('in the use effect')
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
