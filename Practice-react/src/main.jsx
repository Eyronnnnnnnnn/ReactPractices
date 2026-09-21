import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Practice from './practice.jsx'
import Inputname from './inputname.jsx'
import StateAsArray from './stateAsArray.jsx'
import StateArrayofObject from './stateAsArrayofObject.jsx'
import StateArrayofObjectPractice from './stateAsArrayofObjectPractice.jsx'
import Practice2 from './practice2.jsx'
import Eventhandler from './eventhandler.jsx'
import Calculator from './calculator.jsx'
import FunctionalUpdate from './functionalUpdate.jsx'
import LiftingState from './liftingState.jsx'
import ShopList from './shoplist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  /> */}
    {/* <Practice /> */}
    {/* <Inputname /> */}
    {/* <StateAsArray /> */}
    {/* <StateArrayofObject /> */}
    {/* <StateArrayofObjectPractice/> */}
    {/* <Practice2 /> */}
    {/* <Eventhandler /> */}
    {/* <Calculator/> */}
    {/* <FunctionalUpdate /> */}
    {/* <LiftingState/> */}
    <ShopList />

  </StrictMode>
)



