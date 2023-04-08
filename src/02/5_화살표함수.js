// 화살표 함수

var add1 = function (first, second) { return first + second; }

var add2 = (first, second) => { return first + second; }

var add_n_multi = (first, second) => { return { add: first + second, multi: first*second }; }         // 객체를 반환하는 함수
var add_n_multi2 = (first, second) => ({ add: first + second, multi: first*second })                  // 객체를 반환할 때 return을 생략하려면 바깥을 중괄호{} 가 아닌 ()로 감싸야 한다.

var stepFunc = num1 => num2 => { return (num1*10 + num2); }                                           // 아래와 동일한 함수
var stepFunc2 = function (num1) {
   return function (num2) {
      return(num1*10 + num2);
   }
}

console.log(`add1(3,5) result: ${add1(3,5)}`);
console.log(`add2(10,1) result: ${add2(10,1)}`);
console.log(`stepFunc(3)(5) result: ${stepFunc(3)(5)}`);

