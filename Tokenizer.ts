import type { Token, TokenConstructor } from "./Token.ts";

export class Tokenizer {
  // deno-lint-ignore no-explicit-any
  #constructors: TokenConstructor<any>[];

  // deno-lint-ignore no-explicit-any
  constructor(...constructors: TokenConstructor<any>[]) {
    this.#constructors = constructors;
  }

  tokenize(source: string): Token[] {
    const tokens: Token[] = [];

    const chars = source.normalize("NFKC");

    for (let index = 0; index < chars.length; index++) {
      const char = chars[index];

      const previousToken = tokens.at(-1);

      if (previousToken?.canConcat(char)) {
        previousToken.concat(char);
        continue;
      }

      for (const constructor of this.#constructors) {
        if (!constructor.test(char)) continue;

        tokens.push(constructor.create(char, index));
        break;
      }
    }

    return tokens;
  }
}
