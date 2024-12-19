import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class BackslashToken extends SymbolToken {
  override type = TokenType.BACKSLASH;

  static override symbol = "\\";
}
