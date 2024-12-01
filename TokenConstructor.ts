import type { Token } from "./Token.ts";

export interface TokenConstructor<T extends Token> {
  new(source: string, position: [number, number]): T;
  test(char: string): boolean;
  create(char: string, index: number): T;
}
