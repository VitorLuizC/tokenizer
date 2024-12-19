import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class SingleQuoteToken extends SymbolToken {
  override type = TokenType.SINGLE_QUOTE;

  static override symbol = "'";
}
