import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class OpenParenthesisToken extends SymbolToken {
  override type = TokenType.OPEN_PARENTHESIS;

  static override symbol = "(";
}
