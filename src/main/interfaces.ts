import { Direction } from "./enums";

export interface PositionDirection {
  position: Position | undefined;
  direction: Direction;
}

export interface Position {
  row: number;
  column: number;
}
