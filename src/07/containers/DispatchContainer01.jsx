import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

//아래와 같이 써도 같은 결과가 나온다. (dispatch 함수가 setAge에 id, age를 그대로 전달밖에 안 하므로 아래처럼 써도 되는 것.)
// const mapDispatchToProps = {
//   setAge: setAge;
// }

export default connect(null, mapDispatchToProps)(ActionComponent);
