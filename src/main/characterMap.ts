import { DIRECTIONS, ALL_SIGNS } from "../constants";
import { Direction } from "../enums";
import { Position, PositionDirection } from "../interfaces";
import { charIsLetter } from "../utils";

export class CharacterMap {
  private map: string[][];
  private visitedPositions: { [key: number]: number };
  private rows: number;
  private columns: number;
  private position: Position | undefined;
  private direction: Direction;
  private letters: string;
  private path: string;

  constructor(
    map: string[][],
    rows: number,
    columns: number,
    startRowIndex: number,
    startColumnIndex: number
  ) {
    this.map = map;
    this.visitedPositions = {};
    this.rows = rows;
    this.columns = columns;
    this.position = { row: startRowIndex, column: startColumnIndex };
    this.direction = Direction.None;
    this.letters = "";
    this.path = "@";
  }

  public get currentPosition() {
    return this.position;
  }

  public get result() {
    return { letters: this.letters, path: this.path };
  }

  public findNextMove(direction: Direction): Position | undefined {
    if (!this.position) {
      return undefined;
    }

    let nextRow = this.position.row;
    let nextColumn = this.position.column;

    switch (direction) {
      case Direction.Up:
        nextRow--;
        break;
      case Direction.Down:
        nextRow++;
        break;
      case Direction.Left:
        nextColumn--;
        break;
      case Direction.Right:
        nextColumn++;
        break;
      case Direction.None:
      default:
        break;
    }

    if (
      nextRow < 0 ||
      nextRow >= this.rows ||
      nextColumn < 0 ||
      nextColumn >= this.columns
    ) {
      return undefined;
    }

    return { row: nextRow, column: nextColumn };
  }

  private getOppositeDirection() {
    const directions: { [key: number]: Direction } = {
      1: Direction.Down,
      2: Direction.Up,
      3: Direction.Right,
      4: Direction.Left,
    };
    return directions[this.direction];
  }

  public findNextPosition(): PositionDirection {
    if (!this.position) {
      return { position: undefined, direction: Direction.None };
    }

    let allowedMoves: PositionDirection[] = this.direction
      ? [
          {
            position: this.findNextMove(this.direction),
            direction: this.direction,
          },
        ]
      : [];
    const oppositeDirection = this.getOppositeDirection();
    const directions = DIRECTIONS.filter(
      (dir) => dir !== this.direction && dir !== oppositeDirection
    );
    allowedMoves = [
      ...allowedMoves,
      ...directions.map((d: Direction) => {
        return { position: this.findNextMove(d), direction: d };
      }),
    ];

    for (let i = 0; i < allowedMoves.length; i++) {
      const column = allowedMoves[i].position?.column;
      const row = allowedMoves[i].position?.row;
      let char;
      if (
        column !== undefined &&
        column > -1 &&
        row !== undefined &&
        row > -1
      ) {
        char = this.map[row][column];
      }
      if (char && (charIsLetter(char) || ALL_SIGNS.includes(char))) {
        return {
          position: allowedMoves[i].position,
          direction: allowedMoves[i].direction,
        };
      }
    }
    return {
      position: undefined,
      direction: Direction.None,
    };
  }

  public collectCharacters() {
    const { position, direction } = this.findNextPosition();
    this.position = position;
    this.direction = direction;

    if (this.position) {
      const char = this.map[this.position.row][this.position.column];
      this.path += char;

      if (
        char &&
        charIsLetter(char) &&
        this.visitedPositions[this.position.row] !== this.position.column
      ) {
        this.letters += char;
        this.visitedPositions[this.position.row] = this.position.column;
      }
    }
  }
}
