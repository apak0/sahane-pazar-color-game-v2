import React from 'react';

interface GameScoreProps {
  score: number;
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => (
  <div className="mb-16 text-center">
    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 pb-4">
      Mystery Box Challenge
    </h1>
    <div className="inline-block bg-white rounded-full px-8 py-3 shadow-lg">
      <p className="text-xl font-semibold">
        Score: <span className="text-indigo-600">{score}</span>
      </p>
    </div>
  </div>
);