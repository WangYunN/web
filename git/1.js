console.log('hello world');
var a = 12;
var b = 13;
console.log(a + b);
 
//=>a 和 b 交换位置
var a = 10,b = 20;
// 第一种
var c = a;
a = b;
b = c;
console.log(a,b);
// 第二种
a = a + b;
b = a - b;
a = a - b;
console.log(a,b);
// 第三种
[a,b] = [b,a];
console.log(a,b);
