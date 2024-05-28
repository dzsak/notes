import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import BasicRequests from "./components/BasicRequests";
import CardTable from './components/CardTable';
import Chat from './components/Chat';
import Header from './components/Header';
import Login from './components/Login';
import MessageBoard from './components/MessageBoard';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Todos from './components/Todos';

const App = () => {
  const queryClient = new QueryClient();

  console.log(document.cookie)

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <BasicRequests />
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
