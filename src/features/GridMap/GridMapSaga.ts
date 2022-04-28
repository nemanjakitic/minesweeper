import { call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import  ws from '../../app/ws';

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
}