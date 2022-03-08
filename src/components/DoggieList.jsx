import React from 'react'

import SingleDoggo from './SingleDoggo'

const DoggieList = ({ pups }) => {
  console.log(pups)
  return (
    <div>
      {pups.map((pup, i) => {
        return <SingleDoggo pup={pup} i={i} />
      })}
    </div>
  )
}

export default DoggieList
