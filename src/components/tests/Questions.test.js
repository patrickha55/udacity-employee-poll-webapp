import Questions from '../Questions';
import { questions, users } from '../../_DATA';
import { renderWithProviders } from '../../utils/testUtils';
import { screen } from '@testing-library/react';

describe('Test block for Questions component', () => {
  it('should renders all titles', () => {
    renderWithProviders(
      <Questions title={'New Questions'} isNewQuestion={true} />,
      {
        initialState: {
          authUser: 'tylermcginnis',
          users: users,
          questions: questions,
        }
      }
    );

    const newQuestionTitle = screen.getByText(/new questions/i);
    const titles = screen.getAllByTestId(/title/);
    const links = screen.getAllByTestId(/link/);
    const timestamps = screen.getAllByTestId(/timestamp/);

    expect(newQuestionTitle).toBeInTheDocument();
    expect(titles.length).toBe(4);
    expect(links.length).toBe(4);
    expect(timestamps.length).toBe(4);
  });
});