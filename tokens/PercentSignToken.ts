import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class PercentSignToken extends SymbolToken {
  override type = TokenType.PERCENT_SIGN;

  static override symbol = "%";
}
