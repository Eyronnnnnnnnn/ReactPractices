import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Practice from './practice.jsx'
import Inputname from './inputname.jsx'
import StateAsArray from './stateAsArray.jsx'
import StateArrayofObject from './stateAsArrayofObject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  /> */}
    {/* <Practice /> */}
    {/* <Inputname /> */}
    {/* <StateAsArray /> */}
    <StateArrayofObject />

  </StrictMode>
)



