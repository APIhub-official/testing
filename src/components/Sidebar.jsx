import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ChatBubbleLeftRightIcon,
  CloudArrowUpIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ onClose }) => {
  const { theme } = useTheme();

  const navItems = [
    { path: '/chat', icon: ChatBubbleLeftRightIcon, label: 'Chat' },
    { path: '/upload', icon: CloudArrowUpIcon, label: 'Upload' },
    { path: '/themes', icon: PaintBrushIcon, label: 'Themes' },
    { path: '/settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <div 
      className="w-64 h-full flex flex-col border-r"
      style={{ 
        backgroundColor: theme.surface,
        borderColor: theme.border
      }}
    >
      {/* Header */}
      <div className="p-6 border-b" style={{ borderColor: theme.border }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{ 
                backgroundColor: theme.primary,
                color: theme.background
              }}
            >
              AI
            </div>
            <h1 
              className="text-xl font-bold"
              style={{ color: theme.text }}
            >
              Chat Bot
            </h1>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-lg transition-colors"
            style={{ 
              backgroundColor: theme.surfaceHover,
              color: theme.textSecondary
            }}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  hover:scale-105 hover:shadow-lg
                  ${isActive ? 'shadow-md' : ''}
                `}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? theme.primary : 'transparent',
                  color: isActive ? theme.background : theme.text,
                })}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div 
        className="p-4 border-t"
        style={{ borderColor: theme.border }}
      >
        <div 
          className="text-xs text-center opacity-60"
          style={{ color: theme.textSecondary }}
        >
          AI Chat Bot v1.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;