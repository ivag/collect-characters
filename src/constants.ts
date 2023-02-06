import { Direction } from "./enums";

export const START = "@";
export const END = "x";
export const LEFT_RIGHT = "-";
export const UP_DOWN = "|";
export const EMPTY = " ";
export const TURN = "+";
export const DIRECTIONS = [
  Direction.Down,
  Direction.Left,
  Direction.Right,
  Direction.Up,
];
export const ALL_SIGNS = [START, LEFT_RIGHT, UP_DOWN, TURN, END];

// export const INPUT_STRING =
//   '@---A---+\n' +
//   '        |\n' +
//   'x-B-+   C\n' +
//   '    |   |\n' +
//   '    +---+';

export const INPUT_STRING =
  "    +-O-N-+  \n" +
  "    |     |  \n" +
  "    |   +-I-+\n" +
  "@-G-O-+ | | |\n" +
  "    | | +-+ E\n" +
  "    +-+     S\n" +
  "            |\n" +
  "            x";
