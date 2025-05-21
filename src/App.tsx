import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Umich from './umich/App'
import Learn from './learn/App'
import Grow from './grow/App'
import Build from './build/App'

function Home() {
  return (
    <div>
      <h1>nesa shamdasani</h1>
      <h2>trying to <Link to="/learn">learn</Link>, <Link to="/build">build</Link>, and <Link to="/grow">grow</Link> @ <Link to="/umich">university of michigan</Link></h2>
    </div>
  )
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
  )
}

export default App
