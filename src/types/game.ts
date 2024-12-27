export type BoxColor = 'blue' | 'red';

export interface Box {
  id: number;
  color: BoxColor;
  isRevealed: boolean;
}

export interface Row {
  id: number;
  boxes: Box[];
  isActive: boolean;
  isLocked: boolean; // New property to track if row has been used
}