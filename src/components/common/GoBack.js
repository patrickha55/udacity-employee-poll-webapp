import React from 'react';
import withRouter from '../../utils/routerHelper';

const GoBack = ({ router }) => {
  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      router.navigate(-1);
    }
    else {
      router.navigate('/');
    }
  };

  return (
    <div role='button' className='gap-2 position-absolute top-0 left-0 d-flex ms-1 mt-2'>
      <span className="material-icons-round">arrow_back</span>
      <p onClick={handleGoBack}>Go Back</p>
    </div>
  );
};

export default withRouter(GoBack);
