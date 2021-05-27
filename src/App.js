import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    
     <Switch> 
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path="/services" component={Services} />
     <Redirect to ='/'></Redirect>
     </Switch>
    </div>
  );
}

export default App;
