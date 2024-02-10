import { useState } from 'react'
import './App.css'
import UploadForm from './UploadForm'
import axios from 'axios'
function App() {

  axios.defaults.baseURL = 'http://localhost:3001'
  axios.defaults.withCredentials = true;

  return (
    <>
   
       <UploadForm/>


    </>
  )
}

export default App
