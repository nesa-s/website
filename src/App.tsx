import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Umich from './umich/App';
import Learn from './learn/App';
import Grow from './grow/App';
import Build from './build/App';

      
function Home() {
  return (
    <div>
      <h1>nesa shamdasani</h1>
      <h2>
        currently trying to{" "}
        <a href="/learn" className=" text-blue-500">learn</a>,{" "}
        <a href="/build" className=" text-blue-500">build</a>, and{" "}
        <a href="/grow" className=" text-blue-500">grow</a> @{" "}
        <a href="/umich" className=" text-blue-500"> the university of michigan</a>
      </h2>
    </div>
  );

  
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umich" element={<Umich />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/build" element={<Build />} />
      </Routes>
    </Router>
  );
}

export default App;
