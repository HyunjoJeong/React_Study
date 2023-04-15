// 스토어 설정 파일.

import { createStore, combineReducers } from "redux"; // combineReducers 를 통해 여러개의 리듀서를 하나로 묶음
import { composeWithDevTools } from 'redux-devtools-extension'; // window.__REDUX_ 어쩌고 이거 대체할 수 있음
import reducers from './reducers'; // webpack은 폴더의 index 폴더를 자동으로 참조하므로..

export default (initStates) => createStore(
  combineReducers(reducers),
  initStates,
  composeWithDevTools()
);