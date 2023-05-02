import React from 'react';
import { connect } from 'react-redux';
import Card from './common/Card';
import { formatDate, timestampToRelativeTime } from '../utils/dateHelper';

const Question = ({
  question,
}) => {
  return (
    question && <Card
      title={question.author}
      body={formatDate(question.timestamp)}
      button='View Poll'
      timestamp={timestampToRelativeTime(question.timestamp)}
      id={question.id}
    />
  );
};

const mapStateToProps = ({
  dispatch,
}, {
  question,
}) => ({
  dispatch,
  question,
});

export default connect(mapStateToProps)(Question);
