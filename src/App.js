import './App.css';
import React, {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './NavBar'
import Home from './HomeSquares/Home'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Route path='/home' component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;