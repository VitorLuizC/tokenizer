import { Token, TokenType } from "../mod.ts";

export class WordToken extends Token {
  type = TokenType.WORD;

  override canConcat(char: string): boolean {
    return WordToken.test(char);
  }

  static override test(char: string): boolean {
    return /^[a-zA-Z]$/.test(char);
  }
}
