# Changelog

## [0.2.0] - 2024-12-01

### Added

- Tests were added for the abstract token, the tokenizer and basic tokens

  Now our source code is 100% covered in tests, let's try to keep that way

### Change

- `Tokenizer`'s `tokenize` method normalize source using `NFKC` before tokenizing

### Fixed

- `WhiteSpaceToken`'s `test` static method and `canConcat` method no longer returns `true` for line breaks and tabs

## [0.1.0] - 2024-11-28

### Added

- Library was created with the `Tokenizer` class, an abstract class `Token` (that can be extended to create custom tokens) and some basic tokens (`NumberToken`, `UnknownToken` and `WhiteSpaceToken`) to reduce consumers' boilerplace.

[0.2.0]: https://github.com/VitorLuizC/tokenizer/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/VitorLuizC/tokenizer/releases/tag/v0.1.0
