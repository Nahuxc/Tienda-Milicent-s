import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductsContext from './components/ProductsContext/ProductsContext';
import Home from './components/Home/Home';
import Eslogan from './components/Home/Eslogan/Eslogan';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Eslogan/>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productos' element={<ProductsContext/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
