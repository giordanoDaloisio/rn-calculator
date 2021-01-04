import { configureStore, combineReducers } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculatorSlice';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootType = ReturnType<typeof rootReducer>;
export default store;
