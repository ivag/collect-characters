import { Main } from './main/main';
import { INPUT_STRING_1 } from './tests/data';

export const collectCharacters = (input: string) => {
  const map = Main.createMap(input);
  const path = Main.getPath(map);
  return `Letters ${path.letters} \nPath as characters ${path.path}`;
};

console.log(collectCharacters(INPUT_STRING_1));
