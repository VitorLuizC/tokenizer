import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class DotToken extends SymbolToken {
  override type = TokenType.DOT;

  static override symbol = ".";
}
