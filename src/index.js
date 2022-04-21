import { useState } from 'react'
import ReactDOM from 'react-dom'

const Hreset = () => { }

const App = () => {
  const [ bueno, setLeft] = useState(0)
  const [neutral, setRight] = useState(0)
  const [malo, setMalo] = useState(0)
  const [total, settotal ] = useState(0)
  const [porciento, setpor ] = useState(0)
  const [puntaje, setpun ] = useState(0)
  return (
    <div>
      <p>Reseñas</p>
      <button onClick={() => (setLeft(bueno + 1))(settotal(total + 1))}>
        bueno
      </button>
      <button onClick={() => setRight(neutral + 1)(settotal(total + 1))}>
        neutral
      </button>
      <button onClick={() => setMalo(malo + 1)(settotal(total + 1))}>
        malo
      </button>
      <button onClick = {() =>(setpor(100*(bueno/total)))(setpun((bueno-malo)/total))}>%</button>
      <p>Estadisticas
      </p>
      <p>bueno {bueno}</p> <p> neutral {neutral}
      </p> <p>malo {malo}</p> <p>total {total}</p> <p>puntaje {puntaje}</p> <p>positivo {porciento}%</p>
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement);