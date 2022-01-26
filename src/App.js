import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { Section } from "./components/section/section";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./components/ItemListContainer/ItemList";
import Swal from 'sweetalert2';
import ItemDetailContainer from "./components/ItemListContainer/itemDetailContainer";
import { Routes, Route, Link } from "react-router-dom";


export const App = () => {
  const sayName = () => alert("Codershop es barato");
  const products = [
    'Notebook',
    'Mouse',
    'Keyboard',
    'Monitor']
  const productsFiltered = products.filter(product => product.includes('o'))

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      
      <NavBar greeting="Hola" />
      <ItemListContainer greeting="Bienvenidos a CounterShop"/>
      <ItemList/>
      
      <Section title="products">
        <p>Esta seccion es de productos</p>
        <ul>
          {productsFiltered.map((product) =>(
          <li key={product}>{product}</li>
          ))}
        </ul>
      
        
      </Section>
      <Footer />
      
    </div>
  );
};

export default App;
