import { Route, Routes } from 'react-router';
import Nav from './common/Nav';
import Dashboard from './Dashboard';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';

function App({ dispatch, authUser, loading }) {
  useEffect(() => {
    dispatch(loadInitialData());

  }, []);

  return (
    <div className='container'>
      <LoadingBar />
      {
        loading === true
          ? null
          :
          authUser === '' ?
            <Login />
            :
            <>
              <Nav />
              <Routes>
                <Route path='/' exact element={<Dashboard />} />
              </Routes>
            </>
      }
    </div >
  );
}

const mapStateToProps = ({ authUser }) => ({
  loading: authUser === null,
  authUser,
});

export default connect(mapStateToProps)(App);
