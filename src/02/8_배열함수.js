//배열 함수
// forEach(), map(), reduce() 에 대해 아라보자

// forEach()
// forEach() 함수는 배열에 대해 쓰는 함수로, 인덱스 순서대로 배열의 각 인자를 내부 로직에 돌리는 함수이다.
var string1 = "banana=10&apple=20&orange=30";

function parse1(qs) {
   var queryString = qs.split("&");             // &를 기준점으로 qs를 짤라서 queryString에 배열로 대입
   var result = {};
   queryString.forEach((chunk) => {             // chunk는 queryString 배열의 각 인자가 된다.
      const [key, value] = chunk.split("=");
      result[key] = value;                      // reult 객체에 새로운 key: value 생성       ** 중요!
   });
   return result;
}

console.log("parse1 result:");
console.log(parse1(string1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// map()
// map() 함수는 "각 배열 요소"를 "정의된 함수"를 통해 변환한 결과값들로 새 "배열"을 반환한다.
// 주로 불변 변수(const)로 만들 때 사용함.
function parse2(qs) {
   var queryString = qs.split("&");
   const result = queryString.map((chunk) => {  // chunk는 queryString 배열의 각 인자가 된다.
      const [key, value] = chunk.split("=");
      return { key, value };                    // same as: return { key: key, value: value};
   });
   return result;
}

console.log("parse2 result:");
console.log(parse2(string1));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// reduce()
// reduce() 함수는 "배열"을 "객체"로 만들 때 사용한다.
// reduce() 함수의 기본형: reduce((acc, cur, index, element) => {return 결과;}, 초기값);
// acc: 누적값(accumulate), cur: 현재값(currentvalue)... 나머지는 딱히 안 중요할 듯.
// 초기값은 acc의 초기값(0회 순환)을 설정한다. 꼭 하길.. 정신건강에 이롭게..
function parse3(objArray){
   const result = objArray.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
   }, {});
   return result;
}

console.log("parse3 result:");
console.log(parse3(parse2(string1)));