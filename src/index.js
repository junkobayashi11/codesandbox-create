// アロー関数の使用例
// 従来の関数の書き方
// function func1(str){
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));
