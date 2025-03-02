import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/rootReducer';


// Configure the store
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware({ thunk: false }),
  //   sagaMiddleware,
  // ],
});

export default store;
