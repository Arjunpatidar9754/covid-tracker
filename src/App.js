import './App.css';
import {Route, Switch} from 'react-router';
import StateWise from './Statewise.jsx';
import Header from './html/Header.jsx';
import About from './html/About.jsx';
import Vaccination from './html/Vaccination.jsx';
import Home from './html/Home.jsx';
import Footer from './html/Footer.jsx';
import Pincode from './html/Pincode';
import District from './html/District';


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/statewise" component={StateWise} />
      <Route path="/vaccination/pincode" component={Pincode} />
      <Route path="/vaccination/district" component={District} />
      <Route path="/vaccination/*" component={Vaccination} /> 
      <Route exact path="/" component={Home} />

    </Switch>
    <Footer />
    </>
    
  );
}
export default App;