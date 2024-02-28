import './main.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Somos from './Components/Somos/Somos';
import Carrito from './Components/Cart/Cart';
import { CartProvider } from './Context/CarContext';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">  
      <CartProvider>
        <BrowserRouter>
          <Navbar/>  
            <Routes>
              <Route path="/" element={ <ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer  />} />
              <Route path="/productos/:categoria" element={<ItemListContainer  />} />
              <Route path="/somos" element={<Somos/>}/>
              <Route path="/cart" element={<Carrito/>}/>   
              <Route path="/checkout" element={<Checkout/>}/>  
            </Routes>
            <Footer/>            
        </BrowserRouter>
      </CartProvider>
    </div>   
  );
}

export default App;
