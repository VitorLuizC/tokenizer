import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class PlusSignToken extends SymbolToken {
  override type = TokenType.PLUS_SIGN;

  static override symbol = "+";
}
