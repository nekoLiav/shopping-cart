import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/shopping-cart/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
