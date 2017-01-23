import { connect } from 'react-redux';
import LogInPage from './login';
import {logInUser, loginSuccess} from '../../actions/session_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(sessionActions, dispatch)
});

const LogInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInPage);

export default LogInContainer;
