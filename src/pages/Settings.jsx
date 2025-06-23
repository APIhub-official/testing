import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  BellIcon, 
  MoonIcon, 
  SunIcon,
  ComputerDesktopIcon,
  UserIcon,
  ShieldCheckIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Settings = () => {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoScroll, setAutoScroll] = useState(true);

  const SettingItem = ({ icon: Icon, title, description, children }) => (
    <div 
      className="flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:shadow-md"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border
      }}
    >
      <div className="flex items-center space-x-4">
        <Icon 
          className="w-6 h-6"
          style={{ color: theme.primary }}
        />
        <div>
          <h3 
            className="font-medium"
            style={{ color: theme.text }}
          >
            {title}
          </h3>
          {description && (
            <p 
              className="text-sm"
              style={{ color: theme.textSecondary }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );

  const Toggle = ({ checked, onChange }) => (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-6 rounded-full transition-all duration-200 ${
        checked ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: checked ? theme.primary : theme.border
      }}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-200 ${
          checked ? 'translate-x-7' : 'translate-x-1'
        }`}
        style={{
          backgroundColor: theme.background
        }}
      />
    </button>
  );

  return (
    <div 
      className="h-full p-6 overflow-y-auto custom-scrollbar"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl font-bold mb-8"
          style={{ color: theme.text }}
        >
          Settings
        </h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div>
            <h2 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Notifications
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={BellIcon}
                title="Push Notifications"
                description="Receive notifications for new messages"
              >
                <Toggle 
                  checked={notifications} 
                  onChange={setNotifications} 
                />
              </SettingItem>
              
              <SettingItem
                icon={ComputerDesktopIcon}
                title="Sound Effects"
                description="Play sounds for message notifications"
              >
                <Toggle 
                  checked={soundEnabled} 
                  onChange={setSoundEnabled} 
                />
              </SettingItem>
            </div>
          </div>

          {/* Chat Settings */}
          <div>
            <h2 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Chat Settings
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={UserIcon}
                title="Auto Scroll"
                description="Automatically scroll to new messages"
              >
                <Toggle 
                  checked={autoScroll} 
                  onChange={setAutoScroll} 
                />
              </SettingItem>
            </div>
          </div>

          {/* Privacy & Security */}
          <div>
            <h2 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Privacy & Security
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={ShieldCheckIcon}
                title="Data Privacy"
                description="Your conversations are private and secure"
              >
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.background
                  }}
                >
                  Learn More
                </button>
              </SettingItem>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              About
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={InformationCircleIcon}
                title="Version"
                description="AI Chat Bot v1.0.0"
              >
                <span 
                  className="text-sm font-medium"
                  style={{ color: theme.textSecondary }}
                >
                  Latest
                </span>
              </SettingItem>
            </div>
          </div>

          {/* Reset Settings */}
          <div 
            className="p-6 rounded-xl border-2 border-dashed"
            style={{ borderColor: theme.border }}
          >
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: theme.text }}
            >
              Reset Settings
            </h3>
            <p 
              className="mb-4"
              style={{ color: theme.textSecondary }}
            >
              Reset all settings to their default values
            </p>
            <button
              className="px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: theme.surface,
                color: theme.text,
                border: `1px solid ${theme.border}`
              }}
            >
              Reset All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;