import React from 'react'

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
