const kelvin = 0;//今天的天气预报是293开尔文
const celsius = kelvin - 273;//摄氏度
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);//华氏度
console.log(`温度是 ${fahrenheit} 度.`);
// 换算成牛顿
let newton = celsius * (33 / 100);
 
// 下舍入
newton = Math.floor(newton);
 
console.log(`温度是 ${newton} 度牛顿.`);