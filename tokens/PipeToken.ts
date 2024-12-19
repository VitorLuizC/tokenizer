import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class PipeToken extends SymbolToken {
  override type = TokenType.PIPE;

  static override symbol = "|";
}
