import React from 'react'

// This component takes an index (used as our key -not that important-)
// more importantly it takes a single pup, and a function (from App.js)
// that sets our favorite pupper when this component is clicked
const SingleDoggo = ({ pup, i, setFavPupper }) => {
  function handleClick() {
    setFavPupper(pup)
  }

  return (
    <div onClick={handleClick} key={i}>
      <img src={pup.imageUrl} height="100" width="100" />
      <h3>{pup.name}</h3>
      <h5>{pup.breed}</h5>
    </div>
  )
}

export default SingleDoggo
