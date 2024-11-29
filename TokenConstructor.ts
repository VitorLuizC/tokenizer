import type { Token } from "./Token.ts";

export interface TokenConstructor<T extends Token> {
  new(char: string, index: number): T;
  test(char: string): boolean;
  create(char: string, index: number): T;
}
