import { Token } from "../Token.ts";
import { TokenType } from "../TokenType.ts";

export class UnknownToken extends Token {
  override type = TokenType.UNKNOWN;

  override canConcat(_char: string): boolean {
    return false;
  }

  static override test(_char: string): boolean {
    return true;
  }
}
