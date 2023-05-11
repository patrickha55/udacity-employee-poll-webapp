import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from './_DATA';

/**
 * This is the test block for _Data API.
 */
describe('Test block for _Data API', () => {
  it('Should return all users', async () => {
    const result = await _getUsers();

    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    expect(result).toHaveProperty('sarahedo');
    expect(Object.keys(result).length).toBe(4);
  });

  it('Should return all questions', async () => {
    const result = await _getQuestions();

    expect(result).not.toBeNull();
    expect(Object.keys(result).length).toBe(6);
    expect(Object.values(result)[0]).toHaveProperty('author');
  });

  it('Should returns a new question', async () => {
    const question = {
      optionOneText: 'Test option one',
      optionTwoText: 'Test option two',
      author: 'tylermcginnis',
    };

    const result = await _saveQuestion(question);

    expect(result).not.toBeNull();
  });

  it('Should returns an error when passing invalid question', async () => {
    const question = {
      optionOneText: null,
      optionTwoText: 'Test option two',
      author: 'tylermcginnis',
    };

    await expect(_saveQuestion(question)).rejects.toBe("Please provide optionOneText, optionTwoText, and author");
  });

  it('Should return true when saving an question answer', async () => {
    const answer = {
      authedUser: 'tylermcginnis',
      qid: 'xj352vofupe1dqz9emx13r',
      answer: 'optionOne',
    };

    const result = await _saveQuestionAnswer(answer);

    expect(result).toBeTruthy();
  });

  it('Should return a reject message when saving an invalid question answer', async () => {
    const answer = {
      authedUser: null,
      qid: null,
      answer: 'optionOne',
    };

    await expect(_saveQuestionAnswer(answer)).rejects.toBe("Please provide authedUser, qid, and answer");
  });
});