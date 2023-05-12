import React from 'react';
import { connect } from 'react-redux';

const Select = ({
  users,
  values,
  handleChange,
  handleBlur,
  errors,
}) => {
  let result = <small>Loading...</small>;

  if (users !== null) {
    result = Object.keys(users).map(id => <option value={id} key={id}>{users[id].name}</option>);
  }

  return (
    <>
      <select
        name="id"
        value={values.id}
        onChange={handleChange}
        onBlur={handleBlur}
        className='form-select'
      >
        <option value=''>Please select...</option>
        {result}
      </select>
      {errors.id ? (
        <div className='text-danger '><small>{errors.id}</small></div>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Select);
