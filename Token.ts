import type { TokenType } from "./TokenType.ts";
import type { TokenConstructor } from "./TokenConstructor.ts";

export abstract class Token {
  abstract type: TokenType;

  source: string;

  position: [number, number];

  constructor(char: string, index: number) {
    this.source = char;
    this.position = [index, index + 1];
  }

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
    return new this(char, index);
  }

  static test(_char: string): boolean {
    throw new Error(
      `The static 'test' method must be implemented for token "${this.name}"`,
    );
  }
}
