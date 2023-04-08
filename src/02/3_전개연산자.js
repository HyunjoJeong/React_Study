//전개연산자(...)

// 이전 문법
var array1 = ["1", "2"];
var three = array1[2] || "3";      // 첫번째 요소(array1[2])가 존재하지 않으면 3을 대입.
var four = array1[2] || array1[3] || "4";    // 두번째 요소까지 없으면 4를 대입

// 배열 전개 연산자를 쓰면..

const [ first, second, three2="3", four2="4"] = array1;    //앞의 두 요소는 array1의 순서대로 받아오고, 뒤에 three, four는 array1에서 줄 수 없으므로 기본값이 들어감.

var array2 = ["3", "4"];
var array12 = [...array1, ...array2];     // array1과 array2 가 concat 된 값이 나옴.

function foo(...args) {          // "배열" 전개 연산자
   var [first, ...others] = args;
   return others;
}
var result1 = foo(array12);         // result1 에는 아무것도 안 들어감. 이유: args에 들어가는 것이 array12 객체 하나로 해석되는 것이지, 각 값이 들어가는 게 아님.
var result2 = foo(array1, array2);

var object1 = {one: 1, two: 2, other: 0};
var object2 = {three: 3, four: 4, other: 100};
var object3 = {...object1, ...object2,};      // other 값이 겹치는데 뭐가 나올까? => 100(나중에 입력된 것이 들어옴, 즉 업데이트 된다 생각하면 됨)

var { other, ...exc_other} = object3;        // "객체" 전개 연산자

console.log(three);
console.log(four);
console.log(first + second + three2 + four2);
console.log("array12: " + array12);
console.log("result1: " + result1);
console.log(`result2: ${result2}`);    // 템플릿 활용
console.log(`object3.other: ${object3.other}`);
