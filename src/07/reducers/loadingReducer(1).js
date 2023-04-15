// loading을 변경하는 reducer만 모아놓음

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: payload,
      };
    }
    case 'RESET_LOADING': {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};