import './App.css';
import Eslogan from './components/Home/Eslogan/Eslogan';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductsContainer from './components/ProductsContainer/ProductsContext';
import CartContent from './components/CartContent/CartContent';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Eslogan/>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ProductsContainer/>} />
          <Route path='/carrito' element={<CartContent/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
