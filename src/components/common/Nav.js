import { Link } from 'react-router-dom';
import division from '../../images/division.png';
import { connect } from 'react-redux';
import { handleLogoutAuthUser } from '../../actions/authUser';

const Nav = ({ user, dispatch }) => {
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(handleLogoutAuthUser(user.id));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light border-bottom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">New</Link>
            </li>
            <div className='d-flex justify-content-end w-100'>
              <li className="nav-item">
                <Link className="nav-link" to={`/user/${user.id}`}>
                  <img
                    src={user.avatarURL === null ? division : `${user.avatarURL}`}
                    alt={user.name}
                    width="30"
                    height="30"
                    className="d-inline-block align-text-top rounded-circle" />
                  <span className='ps-2'>{user.name}</span>
                </Link>
              </li>
              <li className="ms-2 nav-item">
                <a className="nav-link cursor-pointer" href='#' onClick={handleLogout}>Logout</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authUser, users }) => {
  return {
    authUser,
    user: users[authUser],
  };
};

export default connect(mapStateToProps)(Nav);