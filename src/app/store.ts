import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import gridMapReducer from '../features/GridMap/GridMapSlice';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    gridMap: gridMapReducer
  },
  middleware: getMiddleware => getMiddleware().prepend(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;