import { Direction } from './enums';

export const START = '@';
export const END = 'x';
export const LEFT_RIGHT = '-';
export const UP_DOWN = '|';
export const EMPTY = ' ';
export const TURN = '+';
export const DIRECTIONS = [
  Direction.Down,
  Direction.Left,
  Direction.Right,
  Direction.Up,
];
export const ALL_SIGNS = [START, LEFT_RIGHT, UP_DOWN, TURN, END];
