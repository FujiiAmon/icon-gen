import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GeneratePages from './SampleComponents/GeneratePage.tsx'
import APIRequestTest from './SampleComponents/APIRequestTest.tsx'


import TestPage from './pages/TestPage.tsx'

function App() {


  return (
    <>
      {/* <GeneratePages /> */}
      <TestPage/>
      
    </>
  )
}

export default App
