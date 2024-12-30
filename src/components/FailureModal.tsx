import React from 'react';

interface FailureModalProps {
  isVisible: boolean;
  score: number;
  onRetry: () => void;
  onReset: () => void;
  showRetry: boolean;
}

export const FailureModal: React.FC<FailureModalProps> = ({ isVisible, score, onRetry, onReset, showRetry }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg animate-failure-text" >
        <h2 className="text-3xl font-bold text-red-500 mb-2 ">
          Wrong Choice!
        </h2>
        
        <p className="text-gray-600 mb-6 ">
          {showRetry ? "You selected a red box!" : "Game Over - No more lives!"}
        </p>
        
        <p className="text-lg text-gray-700 mb-8 ">
          Final Score: <span className="font-semibold text-red-500">{score}</span>
        </p>
        
        <div className="space-x-4 a">
          {showRetry && (
            <button onClick={onRetry} className="bg-gray-500 text-white px-4 py-2 rounded">
              Try Again
            </button>
          )}
          <button onClick={onReset} className="bg-gray-500 text-white px-4 py-2 rounded">
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};
