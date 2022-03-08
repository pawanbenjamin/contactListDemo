import React from 'react'

import SingleDoggo from './SingleDoggo'

const DoggieList = ({ pups, setFavPupper }) => {
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
