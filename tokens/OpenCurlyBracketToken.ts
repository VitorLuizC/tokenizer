import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class OpenCurlyBracketToken extends SymbolToken {
  override type = TokenType.OPEN_CURLY_BRACKET;

  static override symbol = "{";
}
