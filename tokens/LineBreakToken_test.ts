import { assert, assertFalse } from "@std/assert";
import { LineBreakToken } from "./LineBreakToken.ts";

Deno.test("LineBreakToken.test checks if char is a number", () => {
  assert(LineBreakToken.test("\r"));
  assert(LineBreakToken.test("\n"));
  assertFalse(LineBreakToken.test("\t"));
  assertFalse(LineBreakToken.test("\s"));
  assertFalse(LineBreakToken.test("s"));
});

Deno.test("LineBreakToken.canConcat checks if the combination would be \\r\\n", () => {
  assert(LineBreakToken.create("\r", 0).canConcat("\n"));
  assertFalse(LineBreakToken.create("\n", 0).canConcat("\r"));
  assertFalse(LineBreakToken.create("\n", 0).canConcat("\n"));
  assertFalse(LineBreakToken.create("\r", 0).canConcat("\r"));
});
