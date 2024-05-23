import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { QueryClient, QueryClientProvider } from "react-query";
import { getToken } from './components/AuthService';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {getToken() ?
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
          :
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />}></Route>
          </Routes>
        }
      </Router>
    </QueryClientProvider>
  );
}

export default App
