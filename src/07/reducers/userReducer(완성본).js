// user 관련 reducer만 모아놓음
// 버전2와의 차이는 loadingReducer(완성본) 에 적어놨으니 참고.

import { SET_USER } from "../actions/userActions";

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      return { ...state, ...payload}; // 기존 state에 payload를 추가해 반환. => 이것이 새 state 가 될 것.
    }
    default:
      return state;
  }
};