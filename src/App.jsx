import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ChatProvider } from './contexts/ChatContext';
import Layout from './components/Layout';
import Chat from './pages/Chat';
import Upload from './pages/Upload';
import Themes from './pages/Themes';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <div className="App">
            <Layout>
              <Routes>
                <Route path="/" element={<Chat />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;