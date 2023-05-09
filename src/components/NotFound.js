import React from 'react';
import withRouter from '../utils/routerHelper';

const NotFound = ({ router }) => {
  const handleGoBack = () => {
    router.navigate('/');
  };

  return (
    <div className='text-center position-relative' style={{ minHeight: '88vh' }}>
      <div className='d-flex flex-column align-items-center position-absolute top-50 w-100'>
        <h1>Oops - This Page Does Not Exist!</h1>
        <h2>404 - Not Found</h2>
        <div role='button' className='gap-2 d-flex'>
          <span className="material-icons-round">arrow_back</span>
          <p onClick={handleGoBack}>Go Back</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NotFound);