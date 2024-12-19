import { assert, assertFalse } from "@std/assert";
import { WhiteSpaceToken } from "./WhiteSpaceToken.ts";

Deno.test("WhiteSpaceToken.test checks if char is a white space", () => {
  assert(WhiteSpaceToken.test(" "));
  assert(WhiteSpaceToken.test("\u00A0"));
  assert(WhiteSpaceToken.test("\u2002"));
  assert(WhiteSpaceToken.test("\u2003"));
  assertFalse(WhiteSpaceToken.test("\t"));
  assertFalse(WhiteSpaceToken.test("\n"));
  assertFalse(WhiteSpaceToken.test("\r"));
  assertFalse(WhiteSpaceToken.test("a"));
});

Deno.test("WhiteSpaceToken.canConcat checks if char is a white space", () => {
  const token = WhiteSpaceToken.create(" ", 0);
  assert(token.canConcat(" "));
  assert(token.canConcat("\u00A0"));
  assert(token.canConcat("\u2002"));
  assert(token.canConcat("\u2003"));
  assertFalse(token.canConcat("\t"));
  assertFalse(token.canConcat("\n"));
  assertFalse(token.canConcat("\r"));
  assertFalse(token.canConcat("a"));
});
