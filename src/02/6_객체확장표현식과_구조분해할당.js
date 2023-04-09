//객체 확장 표현식과 구조 분해 할당

// 객체 확장 표현식
var x = 0;
var y = 3;
var obj1 = { x, y };                         // 객체의 변수를 선언할 때 키값을 생략하면 자동으로 키의 이름으로 키값을 지정한다. 즉, { x: 0, y: 3 }가 된다. (ES6 에서 새로 추가된 방법)
var obj2 = { x: x, y: y};                    // 위와 완전히 동일한 식 좌측의 x는 키 이름, 우측의 x는 키값 (기존 방식)
//var obj3 = { x, y, z}                      // 위와 달리 얘는 z가 존재하지 않는 변수 이므로 오류가 발생.
var obj4 = { x, y, z: 5};                    // 이렇게 하면 되죠 ㅋ

var deco = "th";
var combined = {
   ["4" + deco]: 4,                          // 객체 생성 블록 안에 대괄호[]를 사용하여 표현식을 작성하면 키 이름을 두 string의 concat으로 만들 수 있음.
   ["5" + deco]: 5                           // result : combined = { 4th: 4, 5th: 5 }
}

var obj10 = {
   x,
   methodX() { return x; },                  // 객체 내에 함수를 만들 때 function 키워드 생략 가능 (ES6 에서 새로 추가된 방법)
   //methodA: function() { return "A";}      // 기존의 함수 선언 방법
   methodB() { return "B"; }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 구조 분해와 구조 할당
// 1. 배열 구조 분해 할당
var list = [1, 2];
var [ item1, item2, item3 = 3] = list;       // item1과 item2 에는 list[0]과 list[1]가 할당 되고, item3 에는 기본값 3을 할당

[item1, item2] = [item2, item1];             // item1과 itme2 swapping
console.log(`item1: ${item1}, item2: ${item2}, item3: ${item3}`);

var [ item10, ...otherItems ] = [ 10, 20, 30 ];
console.log(`item10: ${item10}, otherItems: ${otherItems}`);

// 2. 객체 구조 분해 할당
var obj20 = {
   key1 : "one",
   key2 : "two"
};
var {
   key1: newKey1,                            // newKey1이라는 새로운 변수명에 obj20의 key1 을 받아오기 위한 식.
   key2,
   key3 = "three"                            // 기본값 지정
} = obj20;
console.log(`newKey1 = ${newKey1}, key2 = ${key2}, key3 = ${key3}`);

var { key10, ...otherKeys } = { key10: 10, key20: 20, key30: 30};
console.log(`key10: ${key10}, otherKeys: { key20: ${otherKeys.key20}, key30: ${otherKeys.key30} }`);