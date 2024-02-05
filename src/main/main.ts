import { CharacterMap } from './characterMap';
import { START, END } from './constants';

export class Main {
  public static createMap(input: string) {
    if (!input) throw new Error('The input is empty');

    let rows = input.split('\n');
    let columns = rows[0];

    let startingPosition: boolean = false;
    let endingPosition: boolean = false;

    let startingRowIndex: number = -1;
    let startingColumnIndex: number = -1;

    let map: string[][] = [[], []];

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      let inputRow = rows[rowIndex];

      if (columns.length !== inputRow.length) {
        throw new Error('Not even row size');
      }

      map[rowIndex] = [];

      for (let columnIndex = 0; columnIndex < inputRow.length; columnIndex++) {
        let character = inputRow[columnIndex];

        if (character === START) {
          if (startingPosition)
            throw new Error('The starting character was duplicated');

          startingPosition = true;
          startingRowIndex = rowIndex;
          startingColumnIndex = columnIndex;
        }

        if (character === END) endingPosition = true;

        map[rowIndex][columnIndex] = character;
      }
    }

    if (!startingPosition) throw new Error('No starting character was found');
    if (!endingPosition) throw new Error('No ending character was found');

    return new CharacterMap(
      map,
      rows.length,
      columns.length,
      startingRowIndex,
      startingColumnIndex
    );
  }

  static getPath(map: CharacterMap) {
    while (map.currentPosition) {
      map.collectCharacters();
    }
    return map.result;
  }
}
