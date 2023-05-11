import { Provider } from 'react-redux';
import reducers from '../reducers';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

export function renderWithProviders(
  ui,
  {
    initialState = {},
    store = configureStore({
      reducer: reducers,
      middleware: [thunk],
      devTools: process.env.NODE_ENV !== 'production',
      preloadedState: initialState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
