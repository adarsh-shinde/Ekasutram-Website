import Home from './pages/Home';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from './pages/OurTeam';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path = "/"
            element = {<Home/>}
          ></Route>
          <Route
            path = "/our-team"
            element = {<OurTeam/>}
          ></Route>
          <Route
            path = "/events"
            element = {<Events/>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
