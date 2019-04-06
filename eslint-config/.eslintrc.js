module.exports = {
	// 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 root: true)
	// 表从当前目录开始检测 不会往上层继续查找 eslintconfig,
	//  如果项目有多个 eslintrc root:false的话会 往上层合并
	// https://cn.eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
	root: true,
	// -----------------------------------------------------------------------------------
	// 解析相关配置
	// https://cn.eslint.org/docs/user-guide/configuring#specifying-parser-options
	parserOptions: {
		// - 默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。
		// 你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
		ecmaVersion: 6,
		// 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
		sourceType: "module",
		// 这是个对象的值默认都是false，表示你想使用的额外的语言特性
		ecmaFeatures: {
			// 允许在全局作用域下使用 return 语句
			globalReturn: false,
			// 启用全局严格模式
			impliedStrict: false,
			// 启用jsx语法
			jsx: false
			// experimentalObjectRestSpread
		}
	},
	// -----------------------------------------------------------------------------------
	// ESLint 默认使用Espree作为其解析器
	// 配置文件中指定一个不同的解析器
	// 解析器需要符合以下要求:
	// 1.是本地安装的npm包
	// 2.必须有兼容 Esprima 的接口(它必须输出一个 parse() 方法)
	// 3.必须产出兼容 Esprima 的 AST 和 token 对象。
	parser: "esprima", // 常用还有babel-eslint

	// -----------------------------------------------------------------------------------
	// 一个环境定义了一组预定义的全局变量。[跟环境相关的全局变量]
	env: {
		// 之所以没报错是还没设置 rules 配置！！
		// "no-undef": 2设置了 则没设置则会报错
		// https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
		browser: true,
		jquery: true,
		node: true
	},
	// -----------------------------------------------------------------------------------
	// 自定义的全局变量 (no-undef 规则将发出警告)
	// 只要在globals内的都认为是 存在的全局变量 不管对应的是true跟false
	// 将变量设置为 true 将允许变量被重写，或 false 将不允许被重写
	globals: {
		var1: true
	},
	// -----------------------------------------------------------------------------------
	// 第三方插件
	// 插件名称可以省略 eslint-plugin- 前缀
	plugins: [
		"html" // eslint-plugin-html 支持 eslint 检测html
	],
	// -----------------------------------------------------------------------------------
	// 支持在配置文件添加共享设置
	// settings 对象到配置文件，它将提供给每一个将被执行的规则
	settings: {
		// 默认情况下，eslint-plugin-html插件只考虑以这些扩展名结尾的文件作为HTML
		// 您可以使用此设置设置自己的HTML扩展列表
		// 每个规则不管是内置规则还是第三方插件规则 都会有这个值
		"html/html-extensions": [".html", ".wpy"]
	},

	// -----------------------------------------------------------------------------------
	// extends 属性值可以省略包名的前缀 eslint-config-
	// 可以扩展一个流行的风格指南（比如，eslint-config-standard）
	// 继承推荐的规则 会和 rules 合并
	extends: [
		"eslint:recommended" //常用还有 standard

		// 有些插件也会输出规则
		// "plugin:react/recommended"

		//extends 属性值可以是基本配置文件的绝对路径或相对路径。
		// "./node_modules/coding-standard/.eslintrc-jsx

		// extends 属性值可以是 "eslint:all"，启用当前安装的 ESLint 中所有的核心规则。
		// "eslint:all"
	],
	// -----------------------------------------------------------------------------------
	//优先规则  
	overrides: [
		{
			// "bin/*.js", "lib/*.js" 优先使用 以下规则
			files: ["bin/*.js", "lib/*.js"],
			excludedFiles: "*.test.js",
			rules: {
				quotes: [2, "single"]
			}
		}
	],
	// -----------------------------------------------------------------------------------

	/**
	 * rules：开启规则和发生错误时报告的等级
	 * 规则的错误等级有三种：
	 * 0或'off'：关闭规则
	 * 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）
	 * 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)
	 */
	// https://cn.eslint.org/docs/rules/
	rules: {
		"no-console": 0, // eslint:recommended 内是 2

		// ---------------------------------------- Possible Errors ----------------------------------------
		// 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：

		// "for-direction": 2, // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 
		// "getter-return": 2, // 强制在 getter 属性中出现一个 return 语句 (getter-return)
		// "no-await-in-loop": 2, // 禁止在循环中 出现 await (no-await-in-loop)
		// "no-compare-neg-zero": 2, // 禁止与 -0 进行比较			
		// "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
		// "no-console": 2, // 禁用 console			
		// "no-constant-condition": 2, // 禁止在条件中使用常量表达式
		// "no-control-regex": 2, // 禁止在正则表达式中使用控制字符
		// "no-debugger": 2, // 禁用 debugger	
		// "no-dupe-args": 2, // 禁止 function 定义中出现重名参数"
		// "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key
		// "no-duplicate-case": 2, // 禁止出现重复的 case 标签
		// "no-empty": 2, // 禁止出现空语句块
		// "no-empty-character-class": 2 ,// 禁止在正则表达式中使用空字符集
		// "no-ex-assign": 2,  // 禁止对 catch 子句的参数重新赋值
		// "no-extra-boolean-cast": 2, // 禁止不必要的布尔转换
		// "no-extra-parens": 2, // 禁止不必要的括号
		// "no-extra-semi": 2, // 禁止不必要的分号
		// "no-func-assign": 2, //禁止对 function 声明重新赋值
		// "no-inner-declarations": 2, // 禁止在嵌套的块中出现变量声明或 function 声明
		// "no-invalid-regexp": 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串			
		// "no-irregular-whitespace": 2, // 禁止在字符串和注释之外不规则的空白			
		// "no-obj-calls": 2, // 禁止把全局对象作为函数调用
		// "no-prototype-builtins": 2, // 禁止直接调用 Object.prototypes 的内置属性			
		// "no-regex-spaces": 2, //禁止正则表达式字面量中出现多个空格			
		// "no-sparse-arrays": 2, //禁用稀疏数组
		// "no-template-curly-in-string":2 , // 禁止在常规字符串中出现模板字面量占位符语法			
		// "no-unexpected-multiline": 2, // 禁止出现令人困惑的多行表达式
		// "no-unreachable": 2, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码			
		// "no-unsafe-finally": 2, // 禁止在 finally 语句块中出现控制流语句
		// "no-unsafe-negation": 2, // 禁止对关系运算符的左操作数使用否定操作符
		// "use-isnan": 2, // 要求使用 isNaN() 检查 NaN
		// "valid-jsdoc": 2, // 强制使用有效的 JSDoc 注释
		// "valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较

		// ---------------------------------------- Best Practices ----------------------------------------
		// 这些规则是关于最佳实践的，帮助你避免一些问题:

		// "accessor-pairs": 2, // 强制 getter 和 setter 在对象中成对出现	
		// "array-callback-return": 2, // 强制数组方法的回调函数中有 return 语句
		// "block-scoped-var":2, // 强制把变量的使用限制在其定义的作用域范围内"
		// "class-methods-use-this":2, // 强制类方法使用 this
		// "complexity": 2, // 指定程序中允许的最大环路复杂度
		// "consistent-return": 2, //要求 return 语句要么总是指定返回的值，要么不指定
		// "curly": 2, // 强制所有控制语句使用一致的括号风格			
		// "default-case": 2, //要求 switch 语句中有 default 分支			
		// "dot-location": 2, // 强制在点号之前和之后一致的换行			
		// "dot-notation":2, // 强制尽可能地使用点号
		// eqeqeq :2, // 要求使用 === 和 !==			
		// "guard-for-in": 2, // 要求 for-in 循环中有一个 if 语句	
		// "no-alert":2, // 禁用 alert、confirm 和 prompt		
		// "no-caller":2, // 禁用 arguments.caller 或 arguments.callee			
		// "no-case-declarations":2, // 不允许在 case 子句中使用词法声明
		// "no-div-regex":2 ,// 禁止除法操作符显式的出现在正则表达式开始的位置"

		// ... 实在太多了 https://cn.eslint.org/docs/rules/

		
		// // 禁止对原生对象或只读的全局对象进行赋值
		// "no-global-assign": 2,
		// // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		// "no-undef": 2,
		// "no-useless-return": 2
	}
};

// 注释作用详细看 https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments
