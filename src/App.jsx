import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'

function App() {
  const [count, setCount] = useState(0)

  return (

    /* Iniciar con <> permite a React entender que todo será html */
    <>
      <div>
        <h1>
          {count}
        </h1>
      </div>
      <h1>Contador Clicks</h1>
      <div className="card">
        <Boton 
          texto={"Aumentar"}
          esBotonDeClick={true}
          manejarClick={() => setCount((count) => count + 1)}

        />
        <Boton 
          texto={"Reiniciar"}
          esBotonDeClick={false}
          manejarClick={() => setCount((count) => count - count)}

        />
        
        
      </div>
      
      <p className="read-the-docs">
        By Orlo
      </p>

    </>
  )
}

export default App
