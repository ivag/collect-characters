import { collectCharacters } from '../../index';
import {
  INPUT_STRING_1,
  INPUT_STRING_2,
  INPUT_STRING_3,
  INPUT_STRING_4,
} from '../data';

describe('Creating a map and collecting letters tests', () => {
  test('input map 1', () => {
    expect(collectCharacters(INPUT_STRING_1)).toEqual(
      'Letters ACB \nPath as characters @---A---+|C|+---+|+-B-x'
    );
  });
  test('input map 2', () => {
    expect(collectCharacters(INPUT_STRING_2)).toEqual(
      'Letters GOONIES \nPath as characters @-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x'
    );
  });
  test('multiple starts', () => {
    expect(() => {
      collectCharacters(INPUT_STRING_3);
    }).toThrow('The starting character was duplicated');
  });
  test('missing end character', () => {
    expect(() => {
      collectCharacters(INPUT_STRING_4);
    }).toThrow('No ending character was found');
  });
});
