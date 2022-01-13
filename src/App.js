import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Title } from "./components/title/title";
import { Section } from "./components/section/section";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

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

      <NavBar />
      <ItemListContainer />
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
      
      <Title text="Welcome" onClick={sayName} />
      <Title text="Productos" color="blue" onClick={sayName} />
    </div>
  );
};
