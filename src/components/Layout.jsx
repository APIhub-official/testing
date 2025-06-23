import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div 
      className="flex h-screen w-screen overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed md:relative z-50 h-full
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div 
          className="md:hidden flex items-center p-4 border-b"
          style={{ 
            backgroundColor: theme.surface,
            borderColor: theme.border,
            color: theme.text
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg transition-colors"
            style={{ 
              backgroundColor: theme.surfaceHover,
              color: theme.text
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="ml-4 text-lg font-semibold">AI Chat</h1>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;