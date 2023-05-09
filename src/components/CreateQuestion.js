import { connect } from 'react-redux';
import { CREATE_QUESTION_LOADING_SCOPE } from '../utils/common/constants';
import { Formik } from 'formik';
import { handleCreateQuestion } from '../actions/questions';
import Button from './common/Button';
import Input from './common/Input';
import LoadingBar from 'react-redux-loading-bar';
import withRouter from '../utils/routerHelper';
import GoBack from './common/GoBack';

const CreateQuestion = ({
  dispatch,
  authUser,
  router
}) => {
  return (
    <>
      <LoadingBar scope={CREATE_QUESTION_LOADING_SCOPE} />
      <div className='shadow-lg rounded-3 my-2 position-relative' style={{ minHeight: '86vh' }}>
        <GoBack />
        <h2 className='text-center pt-5 pb-2'>Would You Rather</h2>
        <h6 className='text-center text-secondary'>Create Your Own Poll</h6>
        <Formik
          initialValues={{ optionOne: '', optionTwo: '' }}
          onSubmit={
            (values, { setSubmitting }) => {
              const newQuestion = {
                optionOneText: values.optionOne,
                optionTwoText: values.optionTwo,
                author: authUser,
              };

              dispatch(handleCreateQuestion(newQuestion));

              setTimeout(() => {
                values = { optionOne: '', optionTwo: '' };

                setSubmitting(false);
                router.navigate('/');
              }, 1000);
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
                <div className='m-3'>
                  <Input
                    id='inputOptionOne'
                    label='First Option'
                    name='optionOne'
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.optionOne}
                    isRequired={true}
                    placeHolder='Option One'
                  />
                </div>
                <div className='m-3'>
                  <Input
                    id='inputOptionTwo'
                    label='Second Option'
                    name='optionTwo'
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.optionTwo}
                    placeHolder='Option Two'
                    isRequired={true}
                  />
                </div>
                <div className='m-3'>
                  <Button
                    type='submit'
                    additionalClassNames='btn-success w-100'
                    isDisabled={isSubmitting}
                    name={isSubmitting ? 'Creating...' : 'Create'}
                  />
                </div>
              </form>
            )
          }
        </Formik>
      </div>
    </>
  );
};

const mapStateToProps = ({ authUser }, { router }) => ({
  authUser,
  router
});

export default withRouter(connect(mapStateToProps)(CreateQuestion));
