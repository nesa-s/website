import { Link } from 'react-router-dom';

function App() {
    return (
    <div>
      <Link to="/">← back</Link>
      <h1>coursework</h1>
      <h4>(some fun, some not so fun)</h4>
      <ul>
        <li>EECS 203: Discrete Mathematics</li>
        <li>EECS 280: Data Structures</li>
        <li>EECS 281: Data Structures and Algorithms</li>
        <li>EECS 370: Computer Organization</li>
        <li>Piano 110: Introduction to Music Theory</li>
        <li>ENTR 407: Entrepreneurship Hour with Center for Entrepreneurship</li>
      </ul>
      <h1>Engagements</h1>
      <h4>(all fun)</h4>
      <ul>
        <li>M-Hacks</li>
        <li>Undergraduate Research Lab Assistant</li>
        <li>V1</li>
        <li>MHEAL</li>
        <li>Women in Science and Engineering Residencial Program: Peer Mentor</li>

      </ul>
    </div>
  );
}

export default App;