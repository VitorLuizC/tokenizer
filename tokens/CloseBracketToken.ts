import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class CloseBracketToken extends SymbolToken {
  override type = TokenType.CLOSE_BRACKET;

  static override symbol = "]";
}
