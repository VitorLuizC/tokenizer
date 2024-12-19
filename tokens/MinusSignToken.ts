import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class MinusSignToken extends SymbolToken {
  override type = TokenType.MINUS_SIGN;

  static override symbol = "-";
}
