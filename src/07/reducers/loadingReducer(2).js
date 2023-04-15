// loading을 변경하는 reducer만 모아놓음.
// 기존 방식(loadingReducer(1))으로 하면 index.js 에서 loading이라는 이름으로 reducer를 export하기 때문에 loading(reducer) 내에서 loading이 반환되는 이중 구조이므로 이를 해결하고자
// 이 문서 내에서 loading이라는 키워드를 없앰. 즉, loading만 반환하게 하여 애초에 loading이라는 이름이 필요없도록 ㅇㅇ

const initState = false; // 보통 초기 상태가 false 이므로 한 것.. if loading의 초기상태가 true면 여기서도 true를 해야겠지.

export default function reducer(state = initState, action) { // 여기서는 loading만 반환하므로 state의 초기값이 객체가 아닌 bool(initState)로 하는 것
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING': {
      return payload;
    }
    case 'RESET_LOADING': {
      return initState; // initState가 false(=loading의 초기상태) 이므로
    }
    default:
      return state;
  }
};