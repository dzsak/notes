import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
