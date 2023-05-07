import { createStore } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';
import { composeWithDevTools } from '@redux-devtools/extension';

export default function configureStore() {
  const store = createStore(reducers, composeWithDevTools(middlewares));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers));
  }

  return store;
}
