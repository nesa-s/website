import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Umich from './umich/App';
import Learn from './learn/App';
import Grow from './grow/App';
import Build from './build/App';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          nesa shamdasani
        </motion.h1>
        <motion.h2 
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          currently trying to{" "}
          <motion.a 
            href="/learn" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            learn
          </motion.a>,{" "}
          <motion.a 
            href="/build" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            build
          </motion.a>, and{" "}
          <motion.a 
            href="/grow" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            grow
          </motion.a> @{" "}
          <motion.a 
            href="/umich" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            the university of michigan
          </motion.a>
        </motion.h2>
      </motion.div>
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