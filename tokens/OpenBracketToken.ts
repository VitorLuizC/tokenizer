import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class OpenBracketToken extends SymbolToken {
  override type = TokenType.OPEN_BRACKET;

  static override symbol = "[";
}
