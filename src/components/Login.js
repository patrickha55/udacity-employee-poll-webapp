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
import Select from './common/Select';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Login = ({ dispatch, authUser, navigate, users, location }) => {
  const from = location?.state?.from;
  useEffect(() => {
    if (authUser !== '') {
      navigate(from || '/');
    }
  }, [authUser, navigate, from]);

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
          <div className='accordion' id='accordionExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingOne'>
                <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                  Login
                </button>
              </h2>
              <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  <Formik
                    initialValues={{ username: '', password: '' }}

                    validationSchema={LoginSchema}

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
                            isDisabled={values.username === '' || values.password === '' || isSubmitting || Object.keys(errors).length !== 0}
                            name={isSubmitting ? 'Logging in...' : 'Login'}
                            dataTestId='Normal'
                          />
                        </form>
                      )
                    }
                  </Formik>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                  Choose From Existing Users
                </button>
              </h2>
              <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  <Formik
                    initialValues={{ id: '' }}

                    validationSchema={
                      Yup.object().shape({
                        id: Yup.string()
                          .required('Required'),
                      })
                    }

                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        dispatch(handleAuthUser(values.id, users[values.id].password));

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
                        errors,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <Select
                              values={values}
                              handleBlur={handleBlur}
                              handleChange={handleChange}
                              errors={errors}
                            />
                          </div>
                          <Button
                            type='submit'
                            isDisabled={values.id === '' || isSubmitting || errors.id === 'Required'}
                            name={isSubmitting ? 'Logging in...' : 'Login'}
                            dataTestId='Select'
                          />
                        </form>
                      )
                    }
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

const mapStateToProps = ({ authUser, users }, { router }) => ({
  authUser,
  navigate: router.navigate,
  location: router.location,
  users,
});

export default withRouter(connect(mapStateToProps)(Login));
