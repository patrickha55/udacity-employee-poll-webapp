import { connect } from 'react-redux';
import Questions from './Questions';

const Dashboard = () => {
  return (
    <>
      <Questions title={'New Questions'} isNewQuestion={true} />
      <Questions title={'Completed'} isNewQuestion={false} />
    </>
  );
};

export default connect()(Dashboard);
