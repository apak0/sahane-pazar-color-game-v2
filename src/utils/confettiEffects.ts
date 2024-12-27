import confetti from 'canvas-confetti';

export const triggerWinningConfetti = () => {
  // First burst
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#4F46E5', '#3B82F6', '#60A5FA']
  });

  // Delayed second burst
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#4F46E5', '#3B82F6', '#60A5FA']
    });
  }, 200);

  // Delayed third burst
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#4F46E5', '#3B82F6', '#60A5FA']
    });
  }, 400);
};