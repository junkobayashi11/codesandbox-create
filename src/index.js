// // var変数の定義
// var val1 = "var変数";
// console.log(val1);
// val1 ="var変数を上書き";
// console.log(val1)
// var val1 ="var変数を再宣言";
// console.log(val1);

// // let変数の定義
// let val2 = "let関数";
// console.log(val2)
// val2 = "let関数を上書き";
// console.log(val2);

// // constの定義
// const val3 = "const関数";
// console.log(val3);
// const val3 = "const関を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hoge",
//   age: 28,
// };
// val4.name = "ほげ";
// val4.addres = "HIROSHIMA";
// console.log(val4);

// // 配列、pushで配列に追加する
// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
const name = "jun";
const age = 23;

// 「私の名前はじゅんです。年齢は23歳です」。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

// テンプレート文字列用いた方法バッククゥオートで
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
