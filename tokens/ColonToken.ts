import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class ColonToken extends SymbolToken {
  override type = TokenType.COLON;

  static override symbol = ":";
}
