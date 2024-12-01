import { assertEquals } from "@std/assert";
import { Tokenizer } from "./mod.ts";
import { NumberToken, WhiteSpaceToken } from "./tokens.ts";

Deno.test("Tokenizer.tokenize tokenizes using received tokens", () => {
  const tokenizer = new Tokenizer(NumberToken, WhiteSpaceToken);

  assertEquals(tokenizer.tokenize("123 2  1"), [
    new NumberToken("123", [0, 3]),
    new WhiteSpaceToken(" ", [3, 4]),
    new NumberToken("2", [4, 5]),
    new WhiteSpaceToken("  ", [5, 7]),
    new NumberToken("1", [7, 8]),
  ]);
});
