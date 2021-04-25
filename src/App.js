import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import MemesNew from './components/MemesNew'
import MemesIndex from './components/MemesIndex'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <nav>
            <ul style={{listStyleType: "none", display: "flex", justifyContent: }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/memes-new">New Meme</Link>
              </li>
              <li>
                <Link to="/memes-index">Memes Index</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/memes-new">
              <MemesNew />
            </Route>
            <Route path="/memes-index">
              <MemesIndex />
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;



  



