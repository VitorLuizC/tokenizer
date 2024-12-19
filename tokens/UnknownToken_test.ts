import { assert, assertFalse } from "@std/assert";
import { UnknownToken } from "./UnknownToken.ts";

Deno.test("UnknownToken.test always returns 'true'", () => {
  assert(UnknownToken.test(" "));
  assert(UnknownToken.test("a"));
  assert(UnknownToken.test("2"));
  assert(UnknownToken.test("}"));
  assert(UnknownToken.test("ç"));
});

Deno.test("UnknownToken.canConcat always returns 'false'", () => {
  const token = UnknownToken.create(" ", 0);
  assertFalse(token.canConcat(" "));
  assertFalse(token.canConcat("a"));
  assertFalse(token.canConcat("2"));
  assertFalse(token.canConcat("}"));
  assertFalse(token.canConcat("ç"));
});
