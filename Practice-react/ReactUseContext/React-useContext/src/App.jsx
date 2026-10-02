
import NameContext from './NameContext'
import Middle from './Middle'
import './App.css'

function App() {


  return (
    <div>
      <NameContext.Provider value={"Eyron"}>
           <Middle/>
      </NameContext.Provider>
    
    </div>
  )
}

export default App
