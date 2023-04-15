import React, { PureComponent } from 'react';
import { createStore } from 'redux'; // createStore 대신 configureStore을 쓰는 게 더 효율적이지만, 공부를 위해서 createStore을 쓰겠다.
import { Provider } from 'react-redux';

// 리듀서 함수 정의(여기에 쓴 리듀서 함수는 내가 만든 리듀서 함수이고, 이를 creatStore를 통해 스토어?로 전달?)
const reducer = (state, action) => {
  const { type, payload } = action;
  // switch 문을 이용해 action type에 따라 다른 리듀서 작업을 수행
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

class ReduxApp extends PureComponent {
  store = createStore(
    reducer,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  componentDidMount() {
    this.store.dispatch({
      // dispatch 함수를 통해 Action을 Reducer로 전달
      // type이라는 이름은 못 바꾸지만, payload 대신 다른 이름을 써도 됨.
      type: 'SET_LOADING',
      payload: true,
    });
    this.store.dispatch({
      type: 'RESET_LOADING',
    });
    this.store.dispatch({
      type: 'SET_USER',
      payload: { name: 'Park', age: 20 },
    });
  }

  render() {
    return <Provider store={this.store}>Redux 예제</Provider>;
  }
}

export default ReduxApp;
