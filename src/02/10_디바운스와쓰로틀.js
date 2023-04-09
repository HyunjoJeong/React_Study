// 디바운스와 쓰로틀
// 디바운스는 debounce.js 에 잘 정리해놓음.

// 쓰로틀이란: 입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행
// 요청이 실행되는 동안 중복된 요청을 무시하고, 실행 이후 첫번째로 호출되는 요청을 동일하게 지연 실행하여 구간 내에서 중복 요청 과정을 생략한다.

function throttle(func, delay){
   let lastFunc;
   let lastRan;                                           // 마지막으로 함수가 실행됐을 때의 시간.
   return function(...args){
      const context = this;
      if(!lastRan){                                       // 첫 실행일 때는 아직 undefined 이므로,
         func.call(context, ...args);
         lastRan = Date.now();
      }
      else {
         if(lastFunc) { clearTimeout(lastFunc); }
         lastFunc = setTimeout(() => {
            if(Date.now() - lastRan >= delay){              // 지연시간 동안 호출되면 무시함.
               func.call(context, ...args);
               lastRan = Date.now();
            }
         }, delay-(Date.now()-lastRan));                    // 기존 delay를 맞추기 위해 interval을 둔 것.
      }
   }
}
var checkPosition = () => {                                 // 스크롤이 일어나는지 확인하기 위한 함수
   const offset = 500;
   const currentScrollPosition = window.scrollY;
   const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
   if(currentScrollPosition >= pageBottomPosition) { console.log("다음 페이지 로딩"); }
}
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener("scroll", infiniteScroll);