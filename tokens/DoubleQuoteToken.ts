import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class DoubleQuoteToken extends SymbolToken {
  override type = TokenType.DOUBLE_QUOTE;

  static override symbol = '"';
}
