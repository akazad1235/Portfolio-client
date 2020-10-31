import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import { AnimatedSwitch } from 'react-router-transition';
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import About from './Pages/About';


function App() {
  return (
    <div>
      <Router>
        <AnimatedSwitch
           atEnter={{ opacity: 0 }}
           atLeave={{ opacity: 0 }}
           atActive={{ opacity: 1 }}
           className="switch-wrapper"
        >
          <Switch>
            <Route path="/home"    component={Homepage}/>
            <Route path="/project" component={Projects}/>
            <Route path="/blog"    component={Blogs}/>
            <Route path="/about"    component={About}/>
            <Route path="/resume"  component={Resume}/>
            
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/">
              <Homepage/>
            </Route>
          </Switch>
          </AnimatedSwitch>
     </Router>
    </div>
  );
}

export default App;
