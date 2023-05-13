import { connect } from 'react-redux';
import withRouter from '../utils/routerHelper';
import { Navigate } from 'react-router-dom';

const RequiredAuth = ({ children, authUser, location }) => {
  return authUser !== null && authUser !== '' ?
    children : (
      <Navigate to='/login' state={{ from: location.pathname }} />
    );
};

const mapStateToProps = ({ authUser }, { router }) => ({
  authUser,
  location: router.location,
});

export default withRouter(connect(mapStateToProps)(RequiredAuth));
