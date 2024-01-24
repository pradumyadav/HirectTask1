
import './App.css';
import Nav from './NavBar.js/Nav';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
          <Nav/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
