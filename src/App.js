import {
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
  );
}

export default App;



  



