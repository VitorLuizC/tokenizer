import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class CloseCurlyBracketToken extends SymbolToken {
  override type = TokenType.CLOSE_CURLY_BRACKET;

  static override symbol = "}";
}
