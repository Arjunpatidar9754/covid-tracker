import './App.css';
import {Route, Switch} from 'react-router';
import StateWise from './Statewise.jsx';
import Header from './html/Header.jsx';
import About from './html/About.jsx';
import Vaccination from './html/Vaccination.jsx';
import Home from './html/Home.jsx';


function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/statewise" component={StateWise} />
      <Route exact path="/" component={Home} />
    </Switch>
    </>
    
  );
}
export default App;