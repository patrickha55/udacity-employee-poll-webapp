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
import Questions from './Questions';
import RequiredAuth from './RequiredAuth';

function App({ dispatch, authUser, loading }) {
  useEffect(() => {
    if (authUser === null) {
      dispatch(loadInitialData());
    }
  }, [dispatch, authUser]);

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
            <Route path='/' exact element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }>
              <Route path='/' element={<Questions title={'New Questions'} isNewQuestion={true} />} />
              <Route path='completed' element={<Questions title={'Completed'} isNewQuestion={false} />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/leaderboard' element={
              <RequiredAuth>
                <Leaderboard />
              </RequiredAuth>
            } />
            <Route path='/add' element={<RequiredAuth>
              <CreateQuestion />
            </RequiredAuth>} />
            <Route path='/question/:question_id' element={
              <RequiredAuth>
                <QuestionDetail />
              </RequiredAuth>
            } />
            <Route path='*' element={<NotFound />} />
          </Routes>
      }
      <Footer />
    </div >
  );
}

const mapStateToProps = ({ authUser }) => ({
  loading: authUser === null,
  authUser,
});

export default connect(mapStateToProps)(App);
