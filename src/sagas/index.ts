import { all } from 'redux-saga/effects'
import GridMapSaga from '../features/GridMap/GridMapSaga';

export default function* rootSaga() {
  yield all([ GridMapSaga() ]);
}