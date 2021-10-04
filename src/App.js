import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Services from './Componets/Services/Services';
import Header from './Componets/Header/Header';
import About from './Componets/About/About';
import Instructor from './Componets/Instructor/Instructor';
import Footer from './Componets/Footer/Footer';
import NotFound from './Componets/NotFound/NotFound';


function App() {
  return (
    <div>
       <Router>
        <Header/>
         <Switch>
           <Route exact path="/">
            <Home></Home>
           </Route>
           <Route exact path="/home">
           <Home></Home>
           </Route>
           <Route exact path="/about">
            <About></About>
           </Route>
           <Route exact path="/instructor">
            <Instructor></Instructor>
           </Route>
           <Route exact path="/services">
            <Services></Services>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
