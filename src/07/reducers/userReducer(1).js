// user 관련 reducer만 모아놓음

export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER': {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};