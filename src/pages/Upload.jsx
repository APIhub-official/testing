import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { CloudArrowUpIcon, DocumentIcon } from '@heroicons/react/24/outline';

const Upload = () => {
  const { theme } = useTheme();
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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
          Upload Files
        </h1>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
            dragOver ? 'scale-105' : ''
          }`}
          style={{
            borderColor: dragOver ? theme.primary : theme.border,
            backgroundColor: dragOver ? `${theme.primary}10` : theme.surface
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CloudArrowUpIcon 
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: theme.primary }}
          />
          <h3 
            className="text-xl font-semibold mb-2"
            style={{ color: theme.text }}
          >
            Drop files here or click to browse
          </h3>
          <p 
            className="mb-6"
            style={{ color: theme.textSecondary }}
          >
            Support for images, documents, and more
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: theme.primary,
              color: theme.background
            }}
          >
            Choose Files
          </label>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="mt-8">
            <h2 
              className="text-xl font-semibold mb-4"
              style={{ color: theme.text }}
            >
              Uploaded Files ({files.length})
            </h2>
            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:shadow-md"
                  style={{
                    backgroundColor: theme.surface,
                    borderColor: theme.border
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <DocumentIcon 
                      className="w-8 h-8"
                      style={{ color: theme.primary }}
                    />
                    <div>
                      <p 
                        className="font-medium"
                        style={{ color: theme.text }}
                      >
                        {file.name}
                      </p>
                      <p 
                        className="text-sm"
                        style={{ color: theme.textSecondary }}
                      >
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="p-2 rounded-lg transition-colors hover:scale-110"
                    style={{
                      backgroundColor: theme.surfaceHover,
                      color: theme.textSecondary
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;