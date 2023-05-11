import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from '../utils/testUtils';
import { questions, users } from '../_DATA';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  const testUser = {
    mike: {
      id: 'mike',
      name: 'Mike',
      avatarURL: '/images/avatars/mike.jpg',
      answers: {
        "firstQuestion": 'optionOne',
      },
      questions: ['firstQuestion', 'secondQuestion']
    }
  };

  const testQuestions = {
    'firstQuestion': {
      id: 'firstQuestion',
      author: 'mike',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['mike'],
        text: 'The worst thing about prison was the Dementors.',
      },
      optionTwo: {
        votes: [],
        text: 'I\'m not superstitious...but I\'m a little stitious.',
      },
    },
    'secondQuestion': {
      id: 'secondQuestion',
      author: 'mike',
      timestamp: 1467166872634,
      optionOne: {
        votes: [],
        text: 'Me think, why waste time say lot word, when few word do trick?',
      },
      optionTwo: {
        votes: [],
        text: 'I understand nothing.',
      },
    },
  };

  it('should renders the login page with the app first load', () => {
    renderWithProviders(<App />,
      {
        initialState: {
          authUser: '',
        }
      });

    const appName = screen.getByText(/^employee poll$/i);
    const loginandSubmitBtn = screen.getAllByText(/login/i);
    const username = screen.getByText(/username/i);
    const password = screen.getByText(/password/i);
    const footer = screen.getByText(/employee poll - (\d)+/i);

    expect(appName).toBeInTheDocument();
    expect(loginandSubmitBtn.length).toBe(2);
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should renders the dashboard page when user logged in', () => {
    renderWithProviders(
      <App />,
      {
        initialState: {
          authUser: testUser.mike.id,
          users: testUser,
          questions: testQuestions,
        }
      }
    );

    const home = screen.getByText(/home/i);
    const leaderboard = screen.getByText(/leaderboard/i);
    const newQuestionTitle = screen.getByText(/new question/i);
    const logout = screen.getByText(/logout/i);
    const footer = screen.getByText(/employee poll - (\d)+/i);
    const completed = screen.getByText(/completed/i);
    const variousUserAppearances = screen.getAllByText(/mike/i);
    const viewPollButtons = screen.getAllByText(/view poll/i);

    expect(home).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
    expect(newQuestionTitle).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(completed).toBeInTheDocument();
    expect(variousUserAppearances.length).toBe(3);
    expect(viewPollButtons.length).toBe(2);
  });
});
