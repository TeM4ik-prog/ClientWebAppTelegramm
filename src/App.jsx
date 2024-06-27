import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/particals/header/header'
import HpBar from './components/hp-bar/HpBar'
import InfoBear from './components/info-bear/InfoBear'
import Score from './components/score/Score'
import TimeBlock from './components/time_block/TimeBlock'
import Bear from './components/interact_field/bear/Bear'
import Bee from './components/interact_field/bee/Bee'
import InterfaceMenu from './components/ui/interface-menu/InterfaceMenu'

function App() {

  return (
    <div className='wrapper'>
      <Header />

      <Score />
      <InfoBear />
      <HpBar />

      <Bear />
      <Bee />

      <TimeBlock />

      <InterfaceMenu />
    </div>
  )
}

export default App
