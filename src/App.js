import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Home />
    <About />
    <Contact />
    <NotFound />
  </BrowserRouter>
)

export default App;
