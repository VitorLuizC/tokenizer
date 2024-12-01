import { assert, assertEquals, assertFalse } from "@std/assert";
import { Token } from "./Token.ts";
import { TokenType } from "./TokenType.ts";

Deno.test("Token.canConcat returns 'false' by default", () => {
  class WhiteSpaceToken extends Token {
    type = TokenType.WHITE_SPACE;
  }

  const token = WhiteSpaceToken.create(" ", 0);

  assertFalse(token.canConcat(" "));
});

Deno.test("Token.concat concatenates char into token", () => {
  class WhiteSpaceToken extends Token {
    type = TokenType.WHITE_SPACE;
  }

  const token = WhiteSpaceToken.create(" ", 0);

  assertEquals(token.source, " ");
  assertEquals(token.position, [0, 1]);

  token.concat(" ");

  assertEquals(token.source, "  ");
  assertEquals(token.position, [0, 2]);
});

Deno.test("Token.create instantiates token extensions with source and position", () => {
  class WhiteSpaceToken extends Token {
    type = TokenType.WHITE_SPACE;
  }

  const token = WhiteSpaceToken.create(" ", 233);

  assert(token instanceof WhiteSpaceToken);
  assertEquals(token.source, " ");
  assertEquals(token.position, [233, 234]);
});

Deno.test("Token.test throws an error if not implemented", () => {
  class WhiteSpaceToken extends Token {
    type = TokenType.WHITE_SPACE;
  }

  try {
    WhiteSpaceToken.test(" ");
  } catch (error) {
    assert(error instanceof Error);
  }

  class NumberToken extends Token {
    type = TokenType.NUMBER;

    static override test(char: string): boolean {
      return /^[0-9]$/.test(char);
    }
  }

  // Doesn't throw.
  assert(NumberToken.test("1"));
});
