import { put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import {
  setGridMap,
  setStatus
} from './GridMapSlice';
import ws from '../../app/ws';

const initWebSocketChannel = () => {
  return eventChannel(emit => {
    ws.onopen = _ => {
      ws.send('new 1');
    };

    ws.onmessage = (event) => {
      const data = event.data;

      return emit({ data });
    }

    // unsubscribe function
    return () => ws.close();
  });
}

export default function* GridMapSaga() {
  const webSocketChannel = yield call(initWebSocketChannel);

  while (true) {
    const event = yield take(webSocketChannel);
    if (event && event.data) {
      if (event.data.startsWith('map:')) {
        const eventData = event.data.replace('map:', '').split('\n').filter((x: string) => x !== '');

        const gridMap = eventData.map((row: string) => (
          row.split('')
        ))

        yield put(setGridMap(gridMap));
      }
      if (event.data.startsWith('new:') || event.data.startsWith('open: OK')) {
        yield put(setStatus('playing'));
        yield ws.send('map');
      }
      if (event.data.startsWith('open: You win')) {
        yield put(setStatus('win'));
        yield ws.send('map');
      }
      if (event.data === 'open: You lose') {
        yield put(setStatus('lose'));
        yield ws.send('map');
      }
    }

  }
}