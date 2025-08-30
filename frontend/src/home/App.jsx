import { useState } from 'react'
import './App.css'
import Inittial from './components/Inittial';
import DarkModeButton from './components/Darkmode';
import Homepage from './pages/Homepage';

function App() {



  return (
    <div>
      <DarkModeButton />
      {/* <Inittial /> */}
      <Homepage />
    </div>
  )
}

export default App
