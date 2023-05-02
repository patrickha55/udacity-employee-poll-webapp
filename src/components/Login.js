import React from 'react';
import EmployeesImage from '../images/division.png';
import { Formik } from 'formik';
import { handleAuthUser } from '../actions/authUser';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';

const Login = ({ dispatch }) => {
  return (
    <>
      <LoadingBar scope="login" />
      <h2 className='text-center p-5'>Employee Poll</h2>
      <div className='row' style={{ 'minHeight': '81vh' }}>
        <div className='col-6'>
          {
            // Employee icons created by kerismaker - Flaticon
            // https://www.flaticon.com/authors/kerismaker
          }
          <img src={EmployeesImage} alt='Employee Poll' className='rounded-circle ' width={300} />
        </div>
        <div className='col-6'>
          <h3 className='text-center'>Login</h3>
          <Formik
            initialValues={{ username: '', password: '' }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                dispatch(handleAuthUser(values.username, values.password));

                values = { username: '', password: '' };

                setSubmitting(false);
              }, 400);
            }}
          >
            {
              ({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input
                      type="text"
                      name='username'
                      className="form-control"
                      id="inputUsername"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      name='password'
                      className="form-control"
                      id="inputPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      required
                      autoComplete='on' />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )
            }
          </Formik>
        </div>
      </div>
    </>
  );
};

export default connect()(Login);