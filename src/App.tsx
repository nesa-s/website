import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Umich from './umich/App';
import Learn from './learn/App';
import Grow from './grow/App';
import Build from './build/App';

import { BackgroundPaths } from './components/ui/background-paths'; 
      
function Home() {
  return (
    <BackgroundPaths title="nesashamdasani" />
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
