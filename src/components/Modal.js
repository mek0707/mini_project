import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        {/* Close Button */}
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">
          ✕
        </button>
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
