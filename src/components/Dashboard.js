import { connect } from 'react-redux';
import Questions from './Questions';

const Dashboard = () => {
  return (
    <div style={{ minHeight: '90vh' }}>
      <Questions title={'New Questions'} isNewQuestion={true} />
      <Questions title={'Completed'} isNewQuestion={false} />
    </div>
  );
};

export default connect()(Dashboard);
