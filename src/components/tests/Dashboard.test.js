import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/testUtils';
import Dashboard from '../Dashboard';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test block for Dashboard component', () => {
  it('should renders all titles', () => {
    renderWithProviders(
      <Dashboard />
    );

    const switchButton = screen.getByText(/switch to completed/i);
    const completedQuestionTitle = screen.getByText(/completed/i);

    expect(switchButton).toBeInTheDocument();
    expect(completedQuestionTitle).toBeInTheDocument();
  });

  it('should switched to completed question', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <Dashboard />
    );

    const link = screen.getByRole('link');

    user.click(link);


    let switchButton;
    let newQuestionTitle;

    await waitFor(() => {
      switchButton = screen.getByText(/switch to new/i);
      newQuestionTitle = screen.getByText(/new/i);
    });

    expect(switchButton).toBeInTheDocument();
    expect(newQuestionTitle).toBeInTheDocument();
  });
});
