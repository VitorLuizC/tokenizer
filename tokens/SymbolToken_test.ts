import { assert, assertEquals, assertFalse } from "@std/assert";
import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../mod.ts";

Deno.test("SymbolToken.test checks if char is equals the symbocl", () => {
  class WhiteSpaceToken extends SymbolToken {
    override type = TokenType.WHITE_SPACE;

    static override symbol = " ";
  }

  assert(WhiteSpaceToken.test(" "));
  assertFalse(WhiteSpaceToken.test("\t"));
});

Deno.test("SymbolToken.symbol returns the symbol", () => {
  class WhiteSpaceToken extends SymbolToken {
    override type = TokenType.WHITE_SPACE;

    static override symbol = " ";
  }

  assert(WhiteSpaceToken.symbol, " ");
});

Deno.test("SymbolToken.prototype.canConcat always returns 'false'", () => {
  class WhiteSpaceToken extends SymbolToken {
    override type = TokenType.WHITE_SPACE;

    static override symbol = " ";
  }

  const token = WhiteSpaceToken.create(" ", 0);
  assertFalse(token.canConcat(" "));
});

Deno.test("SymbolToken.prototype.value returns the symbol", () => {
  class WhiteSpaceToken extends SymbolToken {
    override type = TokenType.WHITE_SPACE;

    static override symbol = " ";
  }

  const token = WhiteSpaceToken.create(" ", 0);

  assert(token.value, " ");
});

Deno.test("SymbolToken.prototype.value returns the symbol", () => {
  try {
    class WhiteSpaceToken extends SymbolToken {
      override type = TokenType.WHITE_SPACE;
    }

    WhiteSpaceToken.create(" ", 0);
  } catch (error) {
    assertEquals(
      error,
      new Error(
        "The static 'symbol' attribute must be defined for token \"WhiteSpaceToken\"",
      ),
    );
  }
});
