import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Umich from './umich/App';
import Learn from './learn/App';
import Grow from './grow/App';
import Build from './build/App';

function Home() {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-3xl mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        nesa shamdasani
      </motion.h1>
      <motion.h2 
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        currently trying to{" "}
        <motion.a 
          href="/learn" 
          whileHover={{ scale: 1.05 }}
        >
          learn
        </motion.a>,{" "}
        <motion.a 
          href="/build" 
          whileHover={{ scale: 1.05 }}
        >
          build
        </motion.a>, and{" "}
        <motion.a 
          href="/grow" 
          whileHover={{ scale: 1.05 }}
        >
          grow
        </motion.a> @{" "}
        <motion.a 
          href="/umich" 
          whileHover={{ scale: 1.05 }}
        >
          the university of michigan
        </motion.a>
      </motion.h2>
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