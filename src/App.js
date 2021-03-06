import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
// import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import BlogsList from './components/BlogsList';
import BlogItemDetails from './components/BlogItemDetails';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      {/* <Route exact path='/' component={Home}/> */}
      <Route exact path='/' component={BlogsList}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/blogs/:id' component={BlogItemDetails} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default App;
