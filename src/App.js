import './App.css';
import Home from './Companents/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import {Route,Routes,Outlet} from 'react-router-dom'
import About from './Companents/About/About';
import Portfolio from './Companents/Portfolio/Portfolio';
import Product from './Companents/Produkt/Product';
import Expertise from './Companents/Expertise/Expertise';
import Contact from './Companents/Contact/Contact';
import Blog from './Companents/Blog/Blog';
import Endcard from './pages/EndCard/Endcard';
import End_bottom from './pages/End_bottom/End_bottom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/expertise' element={<Expertise/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;
