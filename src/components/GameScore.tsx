import React from 'react';

interface GameScoreProps {
  score: number;
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => (
  <div className="text-center mr-20">
    
    <div className="inline-block bg-white rounded-full px-8 py-3 shadow-lg">
      <p className="text-xl font-semibold">
        Score: <span className="text-indigo-600">{score}</span>
      </p>
    </div>
  </div>
);