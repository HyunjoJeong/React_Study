import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
  setLoading: setLoading,
  resetLoading: resetLoading,
  setUser: setUser,
  setAge: setAge,
  setCollection: setCollection,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
