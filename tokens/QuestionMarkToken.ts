import { SymbolToken } from "./SymbolToken.ts";
import { TokenType } from "../TokenType.ts";

export class QuestionMarkToken extends SymbolToken {
  override type = TokenType.QUESTION_MARK;

  static override symbol = "?";
}
