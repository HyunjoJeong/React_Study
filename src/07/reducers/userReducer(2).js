// user 관련 reducer만 모아놓음
// 굳이 버전2를 만든 이유는 loadingReducer2 에 적어놨으니 참고.

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER': {
      return { ...state, ...payload}; // 기존 state에 payload를 추가해 반환. => 이것이 새 state 가 될 것.
    }
    default:
      return state;
  }
};