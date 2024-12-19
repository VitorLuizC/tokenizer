import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class SemiColonToken extends SymbolToken {
  override type = TokenType.SEMI_COLON;

  static override symbol = ";";
}
