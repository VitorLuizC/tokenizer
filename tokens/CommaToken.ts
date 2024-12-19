import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class CommaToken extends SymbolToken {
  override type = TokenType.COMMA;

  static override symbol = ",";
}
