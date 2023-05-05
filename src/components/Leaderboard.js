import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  let result = <p>No users found</p>;

  result = (
    <table className="table table-striped mt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Users</th>
          <th scope="col">Answered</th>
          <th scope="col">Created</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.values(users).map(
            (user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <th scope='row'>{user.name}</th>
                <th scope='row'>{Object.keys(user.answers).length}</th>
                <th scope='row'>{user.questions.length}</th>
              </tr>
            )
          )
        }
      </tbody>
    </table>
  );

  return (
    <div style={{
      minHeight: '80vh',
    }} >
      <h1 className='text-center p-5'>Leaderboard</h1>
      {result}
    </div>
  );
};

const mapStateToProps = ({
  users
}) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(Leaderboard);