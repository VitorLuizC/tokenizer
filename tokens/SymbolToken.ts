import { Token, type TokenConstructor } from "../Token.ts";
import type { TokenType } from "../TokenType.ts";

// @ts-expect-error because it can't match the generic used in 'create' static
//                  method as it could differ, but it won't.
export abstract class SymbolToken extends Token {
  type!: TokenType;

  static symbol: string;

  get #static(): typeof SymbolToken {
    return this.constructor as typeof SymbolToken;
  }

  constructor(char: string, position: [number, number]) {
    super(char, position);

    if (!this.#static.symbol) {
      throw new Error(
        `The static 'symbol' attribute must be defined for token "${this.#static.name}"`,
      );
    }
  }

  get value(): string {
    return this.#static.symbol;
  }

  static override test(char: string): boolean {
    return char === this.symbol;
  }

  static override create<T extends SymbolToken>(
    this: TokenConstructor<T>,
    char: string,
    index: number,
  ): T {
    return super.create<T>(char, index);
  }
}
