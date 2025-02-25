declare namespace matcher {
	interface Options {
		/**
		Treat uppercase and lowercase characters as being the same.

		Ensure you use this correctly. For example, files and directories should be matched case-insensitively, while most often, object keys should be matched case-sensitively.

		@default false
		*/
		readonly caseSensitive?: boolean;
	}
}

declare const matcher: {
	/**
	It matches even across newlines. For example, `foo*r` will match `foo\nbar`.

	@param inputs - String or array of strings to match.
	@param patterns - String or array of string patterns. Use `*` to match zero or more characters. A pattern starting with `!` will be negated.
	@returns Whether any given `input` matches every given `pattern`.

	@example
	```
	import matcher = require('matcher');

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

	matcher.isMatch([''], ['']);
	//=> true
	```
	*/
	isMatch: (inputs: string | readonly string[], patterns: string | readonly string[], options?: matcher.Options) => boolean;

	/**
	Simple [wildcard](https://en.wikipedia.org/wiki/Wildcard_character) matching.

	It matches even across newlines. For example, `foo*r` will match `foo\nbar`.

	@param inputs - String or array of strings to match.
	@param patterns - String or array of string patterns. Use `*` to match zero or more characters. A pattern starting with `!` will be negated.
	@returns The `inputs` filtered based on the `patterns`.

	@example
	```
	import matcher = require('matcher');

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
	```
	*/
	(inputs: string | readonly string[], patterns: string | readonly string[], options?: matcher.Options): string[];
};

export = matcher;
