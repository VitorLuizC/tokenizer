import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class LessThanToken extends SymbolToken {
  override type = TokenType.LESS_THAN;

  static override symbol = "<";
}
