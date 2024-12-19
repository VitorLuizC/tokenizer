import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class EqualsToken extends SymbolToken {
  override type = TokenType.EQUALS;

  static override symbol = "=";
}
