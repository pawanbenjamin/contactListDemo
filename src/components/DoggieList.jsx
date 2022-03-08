import React from 'react'

import SingleDoggo from './SingleDoggo'

// This component has props of pups and setFavPupper which was passed in
// from the parent App.js component
const DoggieList = ({ pups, setFavPupper }) => {
  // We map through the pups, and for Each pup,
  // then passing the pup info into our SingleDoggo component
  return (
    <div>
      {pups.map((pup, i) => {
        return (
          <SingleDoggo key={i} pup={pup} i={i} setFavPupper={setFavPupper} />
        )
      })}
    </div>
  )
}

export default DoggieList
