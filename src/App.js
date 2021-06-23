
import './App.css';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
