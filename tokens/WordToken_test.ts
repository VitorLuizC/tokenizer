import { assert, assertFalse } from "@std/assert";
import { WordToken } from "./WordToken.ts";

Deno.test("WordToken.test checks if char is a letter", () => {
  assert(WordToken.test("a"));
  assert(WordToken.test("D"));
  assert(WordToken.test("z"));
  assert(WordToken.test("j"));
  assertFalse(WordToken.test("Ã"));
  assertFalse(WordToken.test("9"));
  assertFalse(WordToken.test(" "));
  assertFalse(WordToken.test("@"));
});

Deno.test("WordToken.canConcat checks if char is a letter", () => {
  const token = WordToken.create("a", 0);

  assert(token.canConcat("a"));
  assert(token.canConcat("D"));
  assert(token.canConcat("z"));
  assert(token.canConcat("j"));
  assertFalse(token.canConcat("Ã"));
  assertFalse(token.canConcat("9"));
  assertFalse(token.canConcat(" "));
  assertFalse(token.canConcat("@"));
});
