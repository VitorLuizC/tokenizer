import { Token } from "../Token.ts";
import { TokenType } from "../TokenType.ts";

export class WhiteSpaceToken extends Token {
  override type = TokenType.WHITE_SPACE;

  override canConcat(char: string): boolean {
    return WhiteSpaceToken.test(char);
  }

  static override test(char: string): boolean {
    return /^\s$/.test(char);
  }
}
