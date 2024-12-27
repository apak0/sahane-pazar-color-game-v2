export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const createRow = (rowId: number, isActive: boolean = false): Row => {
  // Each row has 2 blue boxes and 1 red box
  const colors: BoxColor[] = ['blue', 'blue', 'red'];
  const shuffledColors = shuffleArray(colors);
  
  const boxes: Box[] = shuffledColors.map((color, index) => ({
    id: rowId * 3 + index,
    color,
    isRevealed: false,
  }));

  return {
    id: rowId,
    boxes,
    isActive,
    isLocked: false,
  };
};

export const createInitialRows = (): Row[] => {
  return Array.from({ length: 5 }, (_, index) => createRow(index, index === 0));
};

export const checkWinningCondition = (rows: Row[]): boolean => {
  let revealedBlueCount = 0;
  let hasRevealedRed = false;
  let activeRowFound = false;

  for (const row of rows) {
    // Count revealed blue boxes and check for red boxes
    for (const box of row.boxes) {
      if (box.isRevealed) {
        if (box.color === 'blue') {
          revealedBlueCount++;
        } else {
          hasRevealedRed = true;
        }
      }
    }

    // Check if there's still an active row
    if (row.isActive && !row.isLocked) {
      activeRowFound = true;
    }
  }

  // Win conditions:
  // 1. No red boxes revealed
  // 2. All possible blue boxes revealed (should be 5 since we need one from each row)
  // 3. No more active rows or all rows are locked
  return !hasRevealedRed && revealedBlueCount === 5 && !activeRowFound;
};