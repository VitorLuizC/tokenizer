import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class SlashToken extends SymbolToken {
  override type = TokenType.SLASH;

  static override symbol = "/";
}
