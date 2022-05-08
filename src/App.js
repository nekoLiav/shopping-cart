import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
