// prettier.config.js or .prettierrc.js
module.exports = {
	// trailingComma: 'es5',

	// 规定超过多少字符换行(语法允许范围内) [default:80]
	// printWidth: 80, //为了可读性 建议不超过80个字符

	// 指定每个缩进 的空格数 使用 useTabs时无效 [default: 2]
	// tabWidth: 2,

	// 使用制表符缩进行而不是空格。 [default: false]
	useTabs: true,

	// 在语句末尾分号 [default: true]
	semi: false,

	// 使用单引号而不是双引号。 [default: false]
	singleQuote: true,

	// 在JSX中使用单引号而不是双引号  [default: false]
	// jsxSingleQuote: false

	// 逗号结尾
	// none 不逗号结尾
	// es5
	// all 语法允许范围内尽可能逗号结尾
	// <none|es5|all>   [default: none]
	// trailingComma: 'none'

	// 花括号 之间空格 [default: true]
	// true - Example: { foo: bar }.
	// false - Example: {foo: bar}.
	// bracketSpacing: true,

	// jsx 元素 ">" 结尾 是否独立一行 [default: false]
	// jsxBracketSameLine: false

	// 箭头函数单个参数 是否省略 小括号
	// "avoid" - Omit parens when possible. Example: x => x
	// "always" - Always include parens. Example: (x) => x
	// <avoid|always> [default: avoid]
	// arrowParens: 'avoid'

	// 格式化范围
	// rangeStart [default: 0]
	// rangeEnd [default: Infinity]
	// rangeStart: 0,
	// rangeEnd: Infinity

	// 指定要使用的解析器。
	// <"babel" | "vue | "css" | Custom parsers ...>
	// https://prettier.io/docs/en/options.html#parser
	// [default: None]
	// parser: "babel"

	// 指定要使用的文件名，以推断要使用哪个解析器。
	// [default: None]
	// filepath: ""

	// 指定 格式化带有 @prettier 或 @format 的文件
	// /**
	//  * @prettier
	//  */
	// or
	// /**
	//  * @format
	//  */
	// [default: None]
	// requirePragma: true

	// 是否插入 @prettier 或 @format 到文件内
	// [default: false]
	// insertPragma: true

	// 控制是否根据 printWidth 超过换行 决定printWidth选项是否有效
	// proseWrap: "<always|never|preserve>"
	// always: 总是 // 如果超过printWidth 则换行！
	// never: 永远不换行 源代码内换行也格式化成不换行！
	// preserve: 保持原文！！
	// [default: preserve]
	// proseWrap: 'preserve'

	// 在html元素中 空格可能是有作用的 该选项控制是否格式化空格
	// htmlWhitespaceSensitivity: "<css|strict|ignore>"
	// css 遵循 css display默认属性 块元素行元素表现不一样
	// strict 空格被认为是敏感的 不会格式化 html元素内的空格
	// ignore 空格被认为是不敏感的
	// --------------原始------------------
	// <p>a <b>c</b> d </p>
	// ---------------格式化后----------------------
	// <p>
	// 		a
	// 		<b>c</b>
	// 		d
	// 	</p>
	// htmlWhitespaceSensitivity: 'css'

	// 换行符 格式
	// auto 根据系统自动分辨
	// window 换行是 crlf(\r\n)
	// linux 换行是 lf(\n)
	// cr(\r)
	// endOfLine: "<auto|lf|crlf|cr>" [default: auto]
}
