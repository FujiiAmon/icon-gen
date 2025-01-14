import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./pages/GeneratePage.tsx"
import GeneratePages from './pages/GeneratePage.tsx'
import APIRequestTest from './pages/APIRequestTest.tsx'
import FileDownloadButton from './pages/FileDownloadButton.tsx'

function App() {


  return (
    <>
      
      <GeneratePages />
      {/* <APIRequestTest/> */}
      <FileDownloadButton />
    </>
  )
}

export default App
