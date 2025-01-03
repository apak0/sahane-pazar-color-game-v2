import React from 'react';
import { Heart } from 'lucide-react';

interface LivesProps {
  lives: number;
}

export const Lives: React.FC<LivesProps> = ({ lives }) => (
  <div className="flex justify-center items-center  top-8 left-8 gap-2 my-10">
    {Array.from({ length: 3 }).map((_, index) => (
      <Heart
        key={index}
        className={`w-8 h-8 transition-all duration-300 ${
          index < lives 
            ? 'text-red-500 fill-red-500 scale-110' 
            : 'text-gray-300 fill-gray-300 scale-90'
        }`}
      />
    ))}
  </div>
);