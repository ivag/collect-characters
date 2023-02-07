import { Direction } from "../../main/enums";
import { Main } from "../../main/main";
import { INPUT_STRING_1 } from "../data";

describe("CharacterMap class tests", () => {
  const map = Main.createMap(INPUT_STRING_1);

  describe("currentPosition", () => {
    test("currentPosition of the starting character", () => {
      expect(map.currentPosition).toEqual({ row: 0, column: 0 });
    });
  });
  describe("findNextMove", () => {
    test("fineNextMove", () => {
      expect(map.findNextMove(Direction.Right)).toEqual({ row: 0, column: 1 });
    });
  });
  describe("findNextPosition", () => {
    test("findNextPosition", () => {
      expect(map.findNextPosition()).toEqual({
        direction: Direction.Right,
        position: { row: 0, column: 1 },
      });
    });
  });
  describe("collectCharacters", () => {
    test("collectCharacters", () => {
      map.collectCharacters();
      expect(map.result).toEqual({ letters: "", path: "@-" });
    });
  });
});
