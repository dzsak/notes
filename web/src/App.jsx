import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Header />
              <Dashboard />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
            </>
          } />
          <Route path="/*" element={
            <>
              <Header />
              <NoMatch />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App
