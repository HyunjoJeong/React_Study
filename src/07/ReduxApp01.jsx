import React, { PureComponent } from 'react';
import { createStore } from 'redux'; // createStore 대신 configureStore을 쓰는 게 더 효율적이지만, 공부를 위해서 createStore을 쓰겠다.
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent {
  store = createStore(
    (state) => state, // reducer
    { loading: false, name: '두잇 리액트' }, // initial data
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // middleware function
  );

  render() {
    return <Provider store={this.store}>Redux 예제</Provider>;
  }
}

export default ReduxApp;
