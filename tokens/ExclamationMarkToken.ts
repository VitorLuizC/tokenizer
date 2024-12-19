import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class ExclamationMarkToken extends SymbolToken {
  override type = TokenType.EXCLAMATION_MARK;

  static override symbol = "!";
}
