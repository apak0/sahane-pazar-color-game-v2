import React from 'react';
import { XCircle } from 'lucide-react';
import { Button } from './Button';

interface FailureModalProps {
  isVisible: boolean;
  score: number;
  onRetry: () => void;
  onReset: () => void;
  showRetry: boolean;
}

export const FailureModal: React.FC<FailureModalProps> = ({
  isVisible,
  score,
  onRetry,
  onReset,
  showRetry,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-failure-modal">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 animate-pulse rounded-full" />
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6 animate-failure-icon" />
          </div>
          
          <h2 className="text-3xl font-bold text-red-500 mb-2 animate-failure-text">
            Wrong Choice!
          </h2>
          
          <p className="text-gray-600 mb-6 animate-failure-text-delay">
            {showRetry ? "You selected a red box!" : "Game Over - No more lives!"}
          </p>
          
          <p className="text-lg text-gray-700 mb-8 animate-failure-text-delay">
            Final Score: <span className="font-semibold text-red-500">{score}</span>
          </p>
          
          <div className="space-x-4 animate-failure-buttons">
            {showRetry && (
              <Button onClick={onRetry} variant="secondary">
                Try Again
              </Button>
            )}
            <Button onClick={onReset}>
              New Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};