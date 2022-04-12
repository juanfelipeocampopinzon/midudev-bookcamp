
import './App.css';
import Mensaje from './Mensaje';
const Description = () => {
  return <p>Esta es la App curso full stack</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje message='abe'/>
      <Mensaje message='cdf'/>
      <Mensaje message='jkl'/>
    </div>
  );
}

export default App;
