import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/testUtils';
import Dashboard from '../Dashboard';
import { screen } from '@testing-library/react';

describe('Test block for Dashboard component', () => {
  it('should renders all titles', () => {
    renderWithProviders(
      <Dashboard />
    );

    const newQuestionTitle = screen.getByText(/new questions/i);
    const completedQuestionTitle = screen.getByText(/completed/i);

    expect(newQuestionTitle).toBeInTheDocument();
    expect(completedQuestionTitle).toBeInTheDocument();
  });
});