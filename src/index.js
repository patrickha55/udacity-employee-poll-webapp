import React from 'react';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './utils/configureStore';
import ReactDOM from 'react-dom/client';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
