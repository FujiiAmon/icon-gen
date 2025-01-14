import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./SampleComponents/GeneratePage.tsx"
import GeneratePages from './SampleComponents/GeneratePage.tsx'
import APIRequestTest from './SampleComponents/APIRequestTest.tsx'
import FileDownloadButton from './SampleComponents/FileDownloadButton.tsx'

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
