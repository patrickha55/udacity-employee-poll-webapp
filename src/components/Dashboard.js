import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.style.css';

const Dashboard = () => {
  const [flag, setFlag] = useState(0);

  return (
    <div style={{ minHeight: '90vh' }}>
      <h1 className='text-center display-5fw-lighter text-center mt-3 mb-3'>Employee Poll</h1>
      <div className='text-center'>
        {
          flag === 0 ? (
            <Link
              className={`switch nav-link mb-3 ${({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
                }`}
              to='/completed'
              onClick={() => setFlag(1)}
            >
              <span className='material-icons-round'>switch_right</span>
              <div>Switch to Completed</div>
            </Link>
          ) : (
            <Link
              className={`switch nav-link mb-3 w-100 mx-auto ${({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
                }`}
              to='/'
              onClick={() => setFlag(0)}
            >
              <span className='material-icons-round'>switch_left</span>
              <div>Switch to New</div>
            </Link>
          )
        }
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
