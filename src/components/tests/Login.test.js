import { cleanup, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import userEvent from '@testing-library/user-event';
import Login from '../Login';

jest.mock('../../actions/authUser.js', () => ({
  ...jest.requireActual('../../actions/authUser.js'),
  handleAuthUser: jest.fn(),
}));

describe('Test block for Login component', () => {
  /* beforeEach(() => { handleAuthUser.mockClear(); }); */

  afterEach(cleanup);

  it('Should renders all elements', () => {
    renderWithProviders(<Login />);
    const title = screen.getByText(/employee poll/i);
    const username = screen.getByText(/username/i);
    const password = screen.getByText(/password/i);
    const submitBtn = screen.getByTestId(/defaultButtonNormal/);

    expect(title).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  /*it.('should invoked the handleSubmit function when user submitting', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Login />, {
      initialState: { authUser: '', users: users },
    });
    const usernameInput = screen.getByTestId(/usernameInput/);
    const passwordInput = screen.getByTestId(/passwordInput/);
    const submitBtn = screen.getByTestId(/defaultButton/);
    user.type(usernameInput, 'tylermcginnis');
    user.type(passwordInput, 'abc321');
    user.click(submitBtn);
    await waitFor(() => {
      expect(handleAuthUser).toHaveBeenCalledTimes(1);
    });
  }); */

  it('Should renders error messages when user submitting without filling input fields.', async () => {
    const user = userEvent.setup();

    renderWithProviders(<Login />);

    const usernameInput = screen.getByTestId('usernameInput');
    const passwordInput = screen.getByTestId('passwordInput');

    user.type(usernameInput, 'test');
    user.type(passwordInput, 'test');
    user.clear(usernameInput);
    user.clear(passwordInput);

    await waitFor(() => {
      const errorsMessages = screen.getAllByText(/required/i);
      expect(errorsMessages.length).toBe(2);
    });
  });
});
