import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { Button } from './Button';
import { triggerWinningConfetti } from '../utils/confettiEffects';

interface WinModalProps {
  isVisible: boolean;
  score: number;
  onNewGame: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  isVisible,
  score,
  onNewGame,
}) => {
  React.useEffect(() => {
    if (isVisible) {
      triggerWinningConfetti();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-win-modal">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="absolute -left-4 top-0">
              <Star className="w-8 h-8 text-yellow-400 animate-win-star-left" fill="currentColor" />
            </div>
            <Trophy className="w-20 h-20 text-yellow-400 mx-auto animate-win-trophy" />
            <div className="absolute -right-4 top-0">
              <Award className="w-8 h-8 text-yellow-400 animate-win-star-right" fill="currentColor" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 animate-win-text">
            Congratulations!
          </h2>
          
          <p className="text-lg text-gray-600 mb-4 animate-win-text-delay">
            You've mastered the Mystery Box Challenge!
          </p>
          
          <p className="text-xl font-semibold mb-8 animate-win-text-delay">
            Final Score: <span className="text-yellow-500">{score}</span>
          </p>
          
          <div className="animate-win-buttons">
            <Button onClick={onNewGame}>
              Play Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};