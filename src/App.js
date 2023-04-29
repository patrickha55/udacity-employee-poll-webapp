import { Route, Routes } from 'react-router';
import Nav from './components/common/Nav';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
