import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/particals/header/header'
import HpBar from './components/hp-bar/HpBar'
import InfoBear from './components/info-bear/InfoBear'
import Score from './components/score/Score'

function App() {

  return (
    <div className='wrapper'>
      <Header />

      <Score />
      <InfoBear />
      <HpBar />

    </div>
  )
}

export default App
