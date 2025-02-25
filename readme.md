# matcher

> Simple [wildcard](https://en.wikipedia.org/wiki/Wildcard_character) matching

Useful when you want to accept loose string input and regexes/globs are too convoluted.

## Install

```
$ npm install matcher
```

## Usage

```js
const matcher = require('matcher');

matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
//=> ['moo']

matcher(['foo', 'bar', 'moo'], ['!*oo']);
//=> ['bar']

matcher('moo', ['']);
//=> []

matcher('moo', []);
//=> []

matcher([''], ['']);
//=> ['']

matcher.isMatch('unicorn', 'uni*');
//=> true

matcher.isMatch('unicorn', '*corn');
//=> true

matcher.isMatch('unicorn', 'un*rn');
//=> true

matcher.isMatch('rainbow', '!unicorn');
//=> true

matcher.isMatch('foo bar baz', 'foo b* b*');
//=> true

matcher.isMatch('unicorn', 'uni\\*');
//=> false

matcher.isMatch('UNICORN', 'UNI*', {caseSensitive: true});
//=> true

matcher.isMatch('UNICORN', 'unicorn', {caseSensitive: true});
//=> false

matcher.isMatch(['foo', 'bar'], 'f*');
//=> true

matcher.isMatch(['foo', 'bar'], ['a*', 'b*']);
//=> true

matcher.isMatch('unicorn', ['tri*', 'UNI*'], {caseSensitive: true});
//=> false

matcher.isMatch('unicorn', ['']);
//=> false

matcher.isMatch('unicorn', []);
//=> false

matcher.isMatch([], 'bar');
//=> false

matcher.isMatch([], []);
//=> false

matcher.isMatch('', '');
//=> true
```

## API

It matches even across newlines. For example, `foo*r` will match `foo\nbar`.

### matcher(inputs, patterns, options?)

Accepts a string or an array of strings for both `inputs` and `patterns`.

Returns an array of `inputs` filtered based on the `patterns`.

### matcher.isMatch(input, patterns, options?)

Accepts a string or an array of strings for both `inputs` and `patterns`.

Returns a `boolean` of whether any given `input` matches every given `pattern`.

#### input

Type: `string | string[]`

String or array of strings to match.

#### options

Type: `object`

##### caseSensitive

Type: `boolean`\
Default: `false`

Treat uppercase and lowercase characters as being the same.

Ensure you use this correctly. For example, files and directories should be matched case-insensitively, while most often, object keys should be matched case-sensitively.

#### patterns

Type: `string | string[]`

Use `*` to match zero or more characters. A pattern starting with `!` will be negated.

## Benchmark

```
$ npm run bench
```

## Related

- [matcher-cli](https://github.com/sindresorhus/matcher-cli) - CLI for this module
- [multimatch](https://github.com/sindresorhus/multimatch) - Extends `minimatch.match()` with support for multiple patterns

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-matcher?utm_source=npm-matcher&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
