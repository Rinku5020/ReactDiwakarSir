import React, { useContext } from 'react'
import { ThemeChange } from '../ThemeChnange'

function Home() {
    const {theme}=useContext(ThemeChange)

    return (
    <div>
    
      <h1>Change Theme </h1>
      <h1>Thme is {theme=="light"?"light":"dark"}</h1>

    </div>
  )
}

export default Home
