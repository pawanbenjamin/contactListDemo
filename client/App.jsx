import React, { useEffect } from 'react'
import { useState } from 'react'

const URL =
  'https://fsa-puppy-bowl.herokuapp.com/api/2202-FTB-ET-WEB-FT/players'

const App = () => {
  async function getThemPuppies() {
    const stuff = await fetch(URL)
    console.log(stuff)
  }

  useEffect(() => {
    async function getEm() {
      await getThemPuppies()
    }
    getEm()
  }, [])
  return <div>Hello</div>
}

export default App
