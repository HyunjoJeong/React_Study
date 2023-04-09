// 비동기 처리와 비동기 함수

// 비동기 처리란:
// 작업 시간이 많이 필요한 작업 A를 처리하느라 다른 작업들이 대기하고 있는 상태라면,
// 다른 작업들을 먼저 진행하고, 작업 A 및 작업 A와 연관된 작업을 이후에 처리하는 방식을 말한다.

// 교재 71~72 페이지에 깨달은 것을 정리해놨으니 참고하고.. 정 모르겠으면 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 이 사이트에 가보삼.

// 간단하게 정리 해보겠움. 아래 방식은 ES6 방법이고, 기존 방법은 교재 68, 69 페이지를 참고.
// 일단 비동기 함수의 선언은 다음과 같다.
const work1 = () => 
   new Promise((resolve, reject) => {
      setTimeout(() => resolve("작업1 완료"), 100);
   });
const work2 = () => 
   new Promise((resolve, reject) => {
      setTimeout(() => resolve("작업2 완료"), 200);
   });
const work3 = () => 
   new Promise((resolve, reject) => {
      resolve("작업3 완료");
      reject("실패 이유");
   });
// 여기서 resolve, reject는 Promise class 의 then 함수에 들어갈 인자함수이다.
// resolve는 비동기 작업이 실행되었을 때 호출되는 함수이고, reject 는 비동기 작업이 실패했을 떄 호출되는 함수이다.
// 이게 뭔 소리인지는 아래의 실행코드롤 보면서 이해해보자.

// 비동기 함수의 실행 부분
work1()
   .then((msg1) => {
      console.log("done after 100ms " + msg1);
      return work2();
   })
   .then((msg2) => {
      console.log("done after 300ms " + msg2);
      return work3();
   })
   .then((msg3) => {
      console.log("done after work2 " + msg3);
   }, (err_msg) => {
      console.log("work3 실패 이유: " + err_msg);              // 실패하지 않으므로 console창에 나타날 일이 없겠죠?
   });
// then 내에 함수가 있는 것을 볼 수 있다. 이 함수는 msg1 이라는 매개변수를 가지고 콘솔에 출력후 work2를 반환한다.
// 이 함수가 바로 resolve 함수이며, 따라서 msg1 매개변수에 "작업1 완료" 라는 argument가 들어온 것이다.
// return work2()를 해야만 뒤에 .then ~~ 하고 붙일 수 있는 건 이해되겠지? 그래야 work2가 work1 뒤에 연결된 후 200ms 가 추가로 지연되니까.

// 동기 함수 -> 비동기 함수보다 아래에 써있지만, 비동기 함수가 대기 중이므로 먼저 실행될 것이다.
(function() {
   console.log("비동기 함수가 기다려질동안 먼저 실행되는 동기함수~");
})();