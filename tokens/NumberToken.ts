import { Token } from "../Token.ts";
import { TokenType } from "../TokenType.ts";

export class NumberToken extends Token {
  type = TokenType.NUMBER;

  override canConcat(char: string): boolean {
    return NumberToken.test(char);
  }

  static override test(char: string): boolean {
    return /^[0-9]$/.test(char);
  }
}
