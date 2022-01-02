import './App.css';
import { NavBar } from './components/navBar/navBar'

export const App = () => {
  const sayName = () => alert("Codershop es barato")

  return (
    <div className='App'>
      <NavBar />
      
      <button onClick={sayName}>Comprar</button>
    </div>
  )

}

