
import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'info' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgStyles = {
    success: 'bg-stone-900 text-white',
    info: 'bg-stone-100 text-stone-800 border border-stone-200',
    error: 'bg-red-50 text-red-800 border border-red-100'
  };

  return (
    <div className={`fixed bottom-8 left-8 z-[250] px-6 py-4 shadow-2xl animate-slide-up flex items-center space-x-4 ${bgStyles[type]}`}>
      <div className="flex-shrink-0">
        {type === 'info' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold">{message}</p>
      <button onClick={onClose} className="opacity-50 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Notification;
