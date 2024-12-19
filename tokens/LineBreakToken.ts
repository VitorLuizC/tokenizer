import { Token } from "../Token.ts";
import { TokenType } from "../TokenType.ts";

export class LineBreakToken extends Token {
  type = TokenType.LINE_BREAK;

  override canConcat(char: string): boolean {
    return char === "\n" && this.source === "\r";
  }

  static override test(char: string): boolean {
    return char === "\n" || char === "\r";
  }
}
