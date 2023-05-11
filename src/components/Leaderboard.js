import React, { useState } from 'react';
import prisonMike from '../images/prison-mike.png';
import { connect } from 'react-redux';
import './Leaderboard.style.css';
import GoBack from './common/GoBack';

const Leaderboard = ({ sortedUsers }) => {
  const [sortOrderUsers, setSortOrderUsers] = useState(0);
  const [sortOrderAnswered, setSortOrderAnswered] = useState(0);
  const [sortOrderCreated, setSortOrderCreated] = useState(0);
  const [sortedUsersState, setSortedUsersState] = useState(sortedUsers);

  const handleSortedUsers = () => {
    setSortedUsersState(Object.values(sortedUsers).sort(
      (first, second) =>
        sortOrderUsers === 0 ?
          first.name.localeCompare(second.name)
          :
          second.name.localeCompare(first.name)
    ));

    setSortOrderUsers(sortOrderUsers === 0 ? 1 : 0);
  };

  const handleSortedUsersAnswered = () => {
    setSortedUsersState(Object.values(sortedUsers).sort(
      (first, second) =>
        sortOrderAnswered === 0 ?
          Object.keys(first.answers).length - Object.keys(second.answers).length
          :
          Object.keys(second.answers).length - Object.keys(first.answers).length
    ));

    setSortOrderAnswered(sortOrderAnswered === 0 ? 1 : 0);
  };

  const handleSortedUsersQuestions = () => {
    setSortedUsersState(Object.values(sortedUsers).sort(
      (first, second) =>
        sortOrderCreated === 0 ?
          first.questions.length - second.questions.length
          :
          second.questions.length - first.questions.length
    ));

    setSortOrderCreated(sortOrderCreated === 0 ? 1 : 0);
  };

  let result = <p>No users found</p>;

  result = (
    <table className='table table-striped mt-2'>
      <thead>
        <tr className='text-secondary'>
          <th scope='col'>#</th>
          <th
            scope='col'
            className='tableColumn'
            onClick={handleSortedUsers}
          >
            <span>Users</span>
            <span className='material-icons-round' id='answeredArrow'>
              {
                sortOrderUsers === 0 ? 'arrow_downward' : 'arrow_upward'
              }
            </span>
          </th>
          <th
            scope='col'
            className='tableColumn'
            onClick={handleSortedUsersAnswered}
          >
            <span>Answered</span>
            <span className='material-icons-round' id='answeredArrow'>
              {
                sortOrderAnswered === 0 ? 'arrow_downward' : 'arrow_upward'
              }
            </span>
          </th>
          <th
            scope='col'
            className='tableColumn'
            onClick={handleSortedUsersQuestions}
          >
            <span>Created</span>
            <span className='material-icons-round' id='createdArrow'>
              {
                sortOrderCreated === 0 ? 'arrow_downward' : 'arrow_upward'
              }
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          Object.values(sortedUsersState).map(
            (user, index) => (
              <tr key={user.id}>
                <th scope='row'>{index + 1}</th>
                <th scope='row' className='d-flex flex-row flex-sm-column justify-content-around'>
                  <img src={user.avatarURL ?? prisonMike} className='rounded-5' alt={`${user.id} avatar`} width={40} />
                  <span>{user.name}</span>
                </th>
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
    <div className='position-relative' style={{
      minHeight: '88vh',
    }} >
      <GoBack />
      <h1 className='text-center p-5'>Leaderboard</h1>
      {result}
    </div>
  );
};

const mapStateToProps = ({
  users
}) => ({
  sortedUsers: Object.values(users).sort(
    (first, second) =>
      Object.keys(second.answers).length - Object.keys(first.answers).length
      &&
      second.questions.length - first.questions.length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
