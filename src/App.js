import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Section } from "./components/section/section";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemListContainer/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <NavBar greeting="Hola" />
      
      <ItemCount count={productsFiltered.length} />
      <ItemListContainer greeting='Este es el greeting'/>
      <Section title="welcome">
        <p>Esta seccion es de bienvenida</p>
      </Section>
      <Section title="products">
        <p>Esta seccion es de productos</p>
        <ul>
          {productsFiltered.map((product) =>(
          <li key={product}>{product}</li>
          ))}
        </ul>
        
      </Section>
      
    </div>
  );
};

export default App;
