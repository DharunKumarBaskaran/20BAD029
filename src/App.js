import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import all_the_trains from './components/all_the_trains';
import train from './components/train';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/" component={all_the_trains}/>
        <Route exact path="/" component={train}/>
      </Switch>
    </Router>
    </BrowserRouter>

  );
}

export default App;
