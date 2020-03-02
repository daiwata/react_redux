import { createStore , applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/reducer'

export default function configureStore() {
  const logger =  createLogger();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(
      applyMiddleware(logger)
  ));
  return store;
}
