import { Route, Routes } from 'react-router';
import Nav from './common/Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Footer from './common/Footer';
import CreateQuestion from './CreateQuestion';
import withRouter from '../utils/routerHelper';
import QuestionDetail from './QuestionDetail';
import NotFound from './NotFound';

function App({ dispatch, authUser, loading, navigate }) {
  useEffect(() => {
    if (authUser === null) {
      dispatch(loadInitialData());
    }

    if (authUser === '') {
      navigate('/login');
    }
  }, [dispatch, authUser, navigate]);

  const isUserLoggedIn = authUser !== null && authUser !== '';

  return (
    <div className='container'>
      <LoadingBar />
      {
        isUserLoggedIn === true && <Nav />
      }
      {
        loading === true
          ? null
          :
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/add' element={<CreateQuestion />} />
            <Route path='/question/:question_id' element={<QuestionDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      }
      <Footer />
    </div >
  );
}

const mapStateToProps = ({ authUser }, { router }) => ({
  loading: authUser === null,
  authUser,
  navigate: router.navigate,
});

export default withRouter(connect(mapStateToProps)(App));
