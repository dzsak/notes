import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardTable from './components/CardTable';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Chat from './components/Chat';
import Todos from './components/Todos';
import MessageBoard from './components/MessageBoard';
import Profile from './components/Profile';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <CardTable />
            </>
          } />
          <Route path="/todos" element={
            <>
              <Header />
              <Todos />
            </>
          } />
          <Route path="/message-board" element={
            <>
              <Header />
              <MessageBoard />
            </>
          } />
          <Route path="/chat" element={
            <>
              <Header />
              <Chat />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
            </>
          } />
          <Route path="/*" element={<Navigate to="/" replace />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/login" replace />}></Route> */}

        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App
