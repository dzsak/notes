import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import QueryClient from './api/client';
import CardTable from './components/CardTable';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';
import MessageBoard from './components/MessageBoard';
import Profile from './components/Profile';
import SignOut from './components/SignOut';
import Signup from './components/Signup';
import Todos from './components/Todos';

const App = () => {
  const [user, setUser] = useState(null)
  const queryClient = new QueryClient(
    (response) => {
      if (response.status === 401) {
        if (!window.location.pathname.includes("/login") &&
          !window.location.pathname.includes("/signup")
        ) {
          window.location.replace("/login");
        }
      } else {
        console.log(`${response.status}: ${response.statusText} on ${response.path}`);
      }
    }
  );

  useEffect(() => {
    queryClient.getUser()
      .then(data => setUser(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      {user ?
        <>
          <Header user={user} />
          <Routes>
            <Route path="/" element={<CardTable />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/message-board" element={<MessageBoard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/logout" element={<SignOut queryClient={queryClient} />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
        :
        <>
          <Routes>
            <Route path="/signup" element={<Signup queryClient={queryClient} />} />
            <Route path="/login" element={<Login queryClient={queryClient} />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </Routes>
        </>
      }
    </Router>
  );
}

export default App
