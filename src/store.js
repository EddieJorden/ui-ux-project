import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import pieChartSlice from './components/pieChart/pieChartSlice';

import { apiReducer } from './apiReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [apiReducer.reducerPath]: apiReducer.reducer,
    pieChart: pieChartSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiReducer.middleware),
});

setupListeners(store.dispatch);
