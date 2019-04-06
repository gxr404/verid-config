/**
 * 强制 “for” 循环中更新子句的计数器朝着正确的方向移动 
 * for-direction: 2  // 报错 
 **/
// for (var i = 0; i < 10; i--) {
// 	console.log(i);
// }

// for (var i2 = 10; i2 >= 0; i2++) {
// 	console.log(i2);
// }

/**
 * 强制在 getter 属性中出现一个 return 语句 (getter-return)
 * getter-return: 2
 */
// var p = {
//     get name(){
//         // no returns.
//     }
// };
// console.log(p)

/**
 * 禁止在条件语句中出现赋值操作符（no-cond-assign）
 */
// var x;
// var d;
// if (x = d) {
//     var b = 1;
//     console.log(b)
// }
// console.log(x)

/**
 * 禁止在条件中使用常量表达式 (no-constant-condition)
 */
// if (false) {
//     console.log('xxx')
// }

/**
 * no-control-regex: 禁止在正则表达式中使用控制字符
 * 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。
 *  这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
 *  16进制的 1f = 十进制的31  
 *  16进制20 = 十进制32
 */ 
// var pattern1 = /\x1f/;  // error
// console.log(pattern1)
// var pattern2 = /\x20/;  // success
// console.log(pattern1)
