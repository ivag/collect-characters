import { CharacterMap } from "../../main/characterMap";
import { Main } from "../../main/main";
import { INPUT_STRING_1, INPUT_STRING_2 } from "../data";

describe("Main class tests", () => {
  describe("createMap", () => {
    test("createMap with correct input string", () => {
      const map = Main.createMap(INPUT_STRING_1);
      expect(map).toBeInstanceOf(CharacterMap);
    });
  });
  describe("getPath", () => {
    test("get path for correct input map 1", () => {
      const map = Main.createMap(INPUT_STRING_1);
      expect(Main.getPath(map)).toEqual({
        letters: "ACB",
        path: "@---A---+|C|+---+|+-B-x",
      });
    });
    test("get path for correct input map 2", () => {
      const map = Main.createMap(INPUT_STRING_2);
      expect(Main.getPath(map)).toEqual({
        letters: "GOONIES",
        path: "@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x",
      });
    });
  });
});
