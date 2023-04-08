//템플릿 문자열

var string1 = "안녕하세요";
var string2 = "반갑습니다.";
var string12 = `${string1} ${string2}`;   // $와 중괄호 {} 를 사용하여 변수 또는 식을 문자열에 포함시킬 수 있다.

var product = { name: "도서", price: "4200원"};    //객체 생성
var message = `제품 ${product.name}의 가격은 ${product.price}`;

var sString1 = "하이";
var sString2 = "안녕";
var multiline = `${sString1}
${sString2}`;     //  이스케이프 문 없이도 줄 띄우기 가능

var value1 = 3;
var value2 = 5;
var operation1 = `값은 ${value1 * value2}`;

var boolValue = false;
var operation2 = `값은 ${boolValue ? "참" : "거짓"}이다.`;

console.log(message);
console.log(multiline);
console.log(operation1);
console.log(operation2);