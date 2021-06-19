import './App.css';
import {Route, Switch} from 'react-router';
import StateWise from './Statewise.jsx';
import Header from './html/Header.jsx';
import About from './html/About.jsx';
import Vaccination from './html/Vaccination.jsx';


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/" component={StateWise} />
    </Switch>
    </>
    
  );
}
export default App;