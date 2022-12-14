import { configureStore } from '@reduxjs/toolkit';

import { initialRootState } from './root-state.initial';
import { rootReducer } from './root.reducer';

declare const process: any;

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

export { rootStore };
