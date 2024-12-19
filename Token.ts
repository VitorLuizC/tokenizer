import type { TokenType } from "./TokenType.ts";

export interface TokenConstructor<T extends Token> {
  new(source: string, position: [number, number]): T;
  test(char: string): boolean;
  create(char: string, index: number): T;
}

export abstract class Token {
  abstract type: TokenType;

  constructor(
    public source: string,
    public position: [number, number]
  ) {}

  canConcat(_char: string): boolean {
    // It must be implemented for tokens that support concatenation.
    return false;
  }

  concat(char: string) {
    this.source = this.source.concat(char);
    this.position[1] += 1;
  }

  static create<T extends Token>(
    this: TokenConstructor<T>,
    char: string,
    index: number,
  ): T {
    return new this(char, [index, index + 1]);
  }

  static test(_char: string): boolean {
    throw new Error(
      `The static 'test' method must be implemented for token "${this.name}"`,
    );
  }
}
