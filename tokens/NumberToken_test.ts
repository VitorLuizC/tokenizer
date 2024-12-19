import { assert, assertFalse } from "@std/assert";
import { NumberToken } from "./NumberToken.ts";

Deno.test("NumberToken.test checks if char is a number", () => {
  assert(NumberToken.test("0"));
  assert(NumberToken.test("6"));
  assertFalse(NumberToken.test("a"));
  assertFalse(NumberToken.test("}"));
  assertFalse(NumberToken.test("ç"));
  assertFalse(NumberToken.test("e"));
  assertFalse(NumberToken.test("-"));
  assertFalse(NumberToken.test("."));
  assertFalse(NumberToken.test(","));
});

Deno.test("NumberToken.canConcat checks if char is a number", () => {
  const token = NumberToken.create("3", 0);
  assert(token.canConcat("0"));
  assert(token.canConcat("6"));
  assertFalse(token.canConcat("a"));
  assertFalse(token.canConcat("}"));
  assertFalse(token.canConcat("ç"));
  assertFalse(token.canConcat("e"));
  assertFalse(token.canConcat("-"));
  assertFalse(token.canConcat("."));
  assertFalse(token.canConcat(","));
});
