import './App.scss';
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return(
    <Router>
    <Switch>
      <Route exact path="/" component={()=><Landing/>}/>
      <Route path="/home" component={()=><Home/>}/>
    </Switch>
    </Router>
  );
}

export default App;
