import { getStore } from 'kea';
import sagaPlugin from 'kea-saga';

const store = getStore({
  plugins: [sagaPlugin],
  paths: ['filters'],
});

export default store;
