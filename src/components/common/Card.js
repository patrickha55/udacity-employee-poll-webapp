import React from 'react';
import { Link } from 'react-router-dom';

const Card = (item) => {
  return (
    <div className="card text-center border-2 mb-4" style={{ minHeight: '14em' }}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-secondary">{item.body}</p>
        <Link to={`question/${item.id}`} className="btn btn-info">{item.button}</Link>
      </div>
      <div className="card-footer text-muted">
        {item.timestamp}
      </div>
    </div>
  );
};

export default Card;
