import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Pages/Homepage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Homepage/>
          </Route>
          <Route exact path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
