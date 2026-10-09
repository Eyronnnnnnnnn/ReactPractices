
import NameContext from './NameContext'
import Middle from './Middle'
import Child from './Child'
  

function App() {
const name = "Aaron D Gullermo"

  return (
    <div>
      <NameContext.Provider value={name}>
           <Middle/>
      </NameContext.Provider>
      <Child/>
    
    </div>
  )
}

export default App
