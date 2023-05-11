import { connect } from 'react-redux';
import { Formik } from 'formik';
import { handleAuthUser } from '../actions/authUser';
import Button from './common/Button';
import EmployeesImage from '../images/division.png';
import Input from './common/Input';
import LoadingBar from 'react-redux-loading-bar';
import React, { useEffect } from 'react';
import withRouter from '../utils/routerHelper';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Login = ({ dispatch, authUser, navigate }) => {
  useEffect(() => {
    if (authUser !== '') {
      navigate('/');
    }
  }, [authUser, navigate]);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      dispatch(handleAuthUser(values.username, values.password));

      values = { username: '', password: '' };

      setSubmitting(false);
    }, 400);
  };

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

            validationSchema={LoginSchema}

            onSubmit={handleSubmit}
          >
            {
              ({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
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
                      isRequired={false}
                      additionalClassNames={errors.username && touched.username ? 'border-danger' : ''}
                    />
                    {errors.username && touched.username ? (
                      <div className='text-danger '><small>{errors.username}</small></div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <Input
                      type='password'
                      label='Password'
                      name='password'
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      additionalClassNames={errors.password && touched.password ? 'border-danger' : ''}
                      isRequired={false}
                    />
                    {errors.password && touched.password ? (
                      <div className='text-danger'><small>{errors.password}</small></div>
                    ) : null}
                  </div>
                  <Button
                    type='submit'
                    isDisabled={isSubmitting || Object.keys(errors).length !== 0}
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
