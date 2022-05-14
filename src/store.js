import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { sampleDataApi } from './sampleDataApi';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [sampleDataApi.reducerPath]: sampleDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sampleDataApi.middleware),
});

setupListeners(store.dispatch);
