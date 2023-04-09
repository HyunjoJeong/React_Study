// 디바운스
// 실행하고 싶으면 export를 삭제
// 디바운스란: 어떤 내용을 입력하다가 "특정 시간" 동안 대기하고 있으면 "마지막에 입력된 내용"을 바탕으로 서버요청을 하는 방법이다.
// 지연처리를 효율적으로 구현하기 위함임.

export function debounce(func, delay) {
   let inDebounce;
   return (...args) => {
      if(inDebounce){ clearTimeout(inDebounce); }
      inDebounce = setTimeout(() => func(...args), delay);
   }
}
const run = debounce(val => console.log(val), 100);
run("a");
run("b");
run(2);

// Descripton:
// run은 하나의 debounce 함수이므로, run("a")가 실행되면 처음에는 inDebounce가 존재하지 않으므로 if문을 건너뛰고, inDebounce에 함수가 할당된다.
// run("b")가 실행되면, inDebounce가 이미 존재하므로 기존에 있던 inDebounce는 대기가 해제되고, inDebounce에 새로 함수가 할당된다.
// 마찬가지로 run(2)를 실행하면 inDebounce가 이미 존재하므로 기존의 것은 해제되고 새로 할당되는데, 이후 새로운 호출이 없으므로 delay(100ms) 이후 2가 출력된다.

// 즉, ...args는 run() 함수의 인자를 담고 있는 배열을 얻기 위함이고,
// inDebounce 변수는 지연 대기 시간 내에 입력 신호가 호출 되면 실행대기 함수를 취소하기 위함이다.
// inDebounce 변수에는 매 debounce()함수 실행마다 setTimeout() 함수의 반환값이 저장되고,
// 이때 inDebounce에 값이 있으면 clearTimeout()함수를 통해 실행 대기중인 setTimeout() 함수의 작업이 취소되는 것.