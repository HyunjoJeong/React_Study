import React, { PureComponent } from 'react';
import { createStore } from 'redux'; // createStore 대신 configureStore을 쓰는 게 더 효율적이지만, 공부를 위해서 createStore을 쓰겠다.
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent {
  store = createStore(
    (state) => state,
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
  }

  render() {
    return <Provider store={this.store}>Redux 예제</Provider>;
  }
}

export default ReduxApp;
