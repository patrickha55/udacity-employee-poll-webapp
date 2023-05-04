import { connect } from 'react-redux';
import { Formik } from 'formik';
import { handleAuthUser } from '../actions/authUser';
import Button from './common/Button';
import EmployeesImage from '../images/division.png';
import Input from './common/Input';
import LoadingBar from 'react-redux-loading-bar';
import React, { useEffect } from 'react';
import withRouter from '../utils/routerHelper';

const Login = ({ dispatch, authUser, navigate }) => {
  useEffect(() => {
    if (authUser !== '') {
      navigate('/');
    }
  }, [authUser, navigate]);

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
                    <Input
                      type='text'
                      label='Username'
                      name='username'
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.username}
                      isRequired={true}
                    />
                  </div>
                  <div className="mb-3">
                    <Input
                      type='password'
                      label='Password'
                      name='password'
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      isRequired={true}
                    />
                  </div>
                  <Button
                    type='submit'
                    isDisabled={isSubmitting}
                    name={isSubmitting ? 'Logging in...' : 'Login'}
                  />
                </form>
              )
            }
          </Formik>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authUser }, { router }) => ({
  authUser,
  navigate: router.navigate,
});

export default withRouter(connect(mapStateToProps)(Login));
