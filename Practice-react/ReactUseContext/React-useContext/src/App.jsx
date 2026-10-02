
import NameContext from './NameContext'
import Middle from './Middle'
  

function App() {
const name = "eyron"

  return (
    <div>
      <NameContext.Provider value={name}>
           <Middle/>
      </NameContext.Provider>
    
    </div>
  )
}

export default App
