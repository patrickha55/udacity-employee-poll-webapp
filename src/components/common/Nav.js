import { Link } from 'react-router-dom';
import prisonMike from '../../images/prison-mike.png';
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <Link className="nav-link" to={`/user/${1}`}>
                  <img src={prisonMike}
                    alt="Prison Mike"
                    width="30"
                    height="30"
                    className="d-inline-block align-text-top rounded-circle" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;