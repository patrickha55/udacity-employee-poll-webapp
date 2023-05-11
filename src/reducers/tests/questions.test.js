import questions from '../questions';
import { questions as questionList } from '../../_DATA';
import { CHOOSE_QUESTION_OPTION, CREATE_QUESTION, RECEIVE_QUESTIONS } from '../../utils/common/constants';

describe('Questions reducer', () => {
  const testQuestion = {
    id: 'constants',
    author: 'phat',
    timestamp: 1600000000000,
    optionOne: {
      votes: [],
      text: 'Test 1',
    },
    optionTwo: {
      votes: [],
      text: 'Test 2'
    },
  };

  const option = {
    authedUser: 'phat',
    qid: 'constants',
    answer: 'optionOne',
  };

  it('should returns the initial state', () => {
    const expected = {};

    const actual = questions(undefined, {});

    expect(actual).toEqual(expected);
  });

  it('should handle receive questions', () => {
    const action = {
      type: RECEIVE_QUESTIONS,
      questions: {
        [testQuestion.id]: testQuestion,
      }
    };

    const expected = {
      [testQuestion.id]: testQuestion,
    };

    const actual = questions(undefined, action);

    expect(actual).toEqual(expected);
  });

  it('should handle create question', () => {
    const action = {
      type: CREATE_QUESTION,
      question: testQuestion,
    };

    const expected = {
      [testQuestion.id]: testQuestion,
    };

    const actual = questions(undefined, action);

    expect(actual).toEqual(expected);
  });

  it('should handle choose question option', () => {
    const action = {
      type: CHOOSE_QUESTION_OPTION,
      option,
    };

    const expected = {
      [testQuestion.id]: {
        ...testQuestion,
        optionOne: {
          ...testQuestion.optionOne,
          votes: testQuestion.optionOne.votes.concat([option.authedUser]),
        },
      },
    };

    const actual = questions({ [testQuestion.id]: testQuestion }, action);

    expect(actual).toEqual(expected);
  });
});
