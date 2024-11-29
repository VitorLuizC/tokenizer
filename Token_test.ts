import { assert } from "@std/assert";
import { Token } from "./Token.ts";
import { TokenType } from "./TokenType.ts";

Deno.test("Token.create instantiates token extensions", () => {
  class WhiteSpaceToken extends Token {
    type = TokenType.WHITE_SPACE;
  }

  const token = WhiteSpaceToken.create(" ", 0);

  assert(token instanceof WhiteSpaceToken);
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
      return /^[0-9]$/.test(char)
    }
  }

  // Doesn't throw.
  assert(NumberToken.test('1'));
});

