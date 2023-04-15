// loading을 변경하는 reducer만 모아놓음.
// loadingReducer(2) 와의 차이점: type을 임포트하여 사용

import { SET_LOADING, RESET_LOADING } from "../actions/loadingActions";

const initState = false; // 보통 초기 상태가 false 이므로 한 것.. if loading의 초기상태가 true면 여기서도 true를 해야겠지.

export default function reducer(state = initState, action) { // 여기서는 loading만 반환하므로 state의 초기값이 객체가 아닌 bool(initState)로 하는 것
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return payload;
    }
    case RESET_LOADING: {
      return initState; // initState가 false(=loading의 초기상태) 이므로
    }
    default:
      return state;
  }
};