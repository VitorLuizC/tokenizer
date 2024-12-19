import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class CloseParenthesisToken extends SymbolToken {
  override type = TokenType.CLOSE_PARENTHESIS;

  static override symbol = ")";
}
