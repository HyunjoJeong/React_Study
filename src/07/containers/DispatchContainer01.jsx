import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

//아래와 같이 써도 같은 결과가 나온다.
// const mapDispatchToProps = {
//   setAge: setAge;
// }

export default connect(null, mapDispatchToProps)(ActionComponent);
