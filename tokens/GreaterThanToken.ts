import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class GreaterThanToken extends SymbolToken {
  override type = TokenType.GREATER_THAN;

  static override symbol = ">";
}
