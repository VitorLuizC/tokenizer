# Changelog

## [0.4.0] - 2024-12-18

### Added

- The `WordToken` class was added to tokenize words

- The `LineBreakToken` class was added to tokenize line breaks

- The `CommaToken`, `DotToken`, `DoubleQuoteToken`, `EqualsToken`,
  `ExclamationMarkToken`, `GreaterThanToken`, `LessThanToken`, `MinusSignToken`,
  `NumberToken_test`, `NumberToken`, `OpenBracketToken`,
  `OpenCurlyBracketToken`, `OpenParenthesisToken`, `PercentSignToken`,
  `PipeToken`, `PlusSignToken`, `QuestionMarkToken`, `SemiColonToken`,
  `SingleQuoteToken` and `SlashToken` classes were added to tokenize their
  respective symbols

### Changed

- Entire source code was formatted

- `CHANGELOG.md` was updated with versions 0.3.0, 0.3.1 and 0.4.0

## [0.3.1] - 2024-12-18

### Fixed

- `SymbolToken` is exported with other tokens in the `mod.ts`

## [0.3.0] - 2024-12-18

### Added

- The abstract class `SymbolToken` was added, it can be extended to create
  custom symbol tokens

### Changed

- `TokenConstructor` was moved to `Token` module

## [0.2.0] - 2024-12-01

### Added

- Tests were added for the abstract token, the tokenizer and basic tokens

  Now our source code is 100% covered in tests, let's try to keep that way

### Changed

- `Tokenizer`'s `tokenize` method normalize source using `NFKC` before
  tokenizing

### Fixed

- `WhiteSpaceToken`'s `test` static method and `canConcat` method no longer
  returns `true` for line breaks and tabs

## [0.1.0] - 2024-11-28

### Added

- Library was created with the `Tokenizer` class, an abstract class `Token`
  (that can be extended to create custom tokens) and some basic tokens
  (`NumberToken`, `UnknownToken` and `WhiteSpaceToken`) to reduce consumers'
  boilerplace.

[0.4.0]: https://github.com/VitorLuizC/tokenizer/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/VitorLuizC/tokenizer/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/VitorLuizC/tokenizer/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/VitorLuizC/tokenizer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/VitorLuizC/tokenizer/releases/tag/v0.1.0
