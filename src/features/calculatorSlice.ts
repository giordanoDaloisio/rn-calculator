import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { RootType } from '../app/store';
import { CalculatorState } from '../model/calculatorState';
import { Operator } from '../model/operator';

const initialState: CalculatorState = {
  firstNum: null,
  operator: null,
  secondNum: null,
  result: null,
  error: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState as CalculatorState,
  reducers: {
    setFirstNum(state, action: PayloadAction<number>) {
      state.firstNum = action.payload;
    },
    setOperator(state, action: PayloadAction<Operator | null>) {
      state.operator = action.payload;
    },
    setSecondNum(state, action: PayloadAction<number | null>) {
      state.secondNum = action.payload;
    },
    setResult(state, action: PayloadAction<number>) {
      state.result = action.payload;
    },
    resetState(state) {
      state.firstNum = null;
      state.secondNum = null;
      state.operator = null;
      state.error = null;
    },
    setNumber(state, action: PayloadAction<number>) {
      !state.operator
        ? (state.firstNum = action.payload)
        : (state.secondNum = action.payload);
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const calculateResult = () => {
  return (dispatch: Dispatch<any>, getState: () => RootType) => {
    const { calculator }: { calculator: CalculatorState } = getState();
    if (calculator.firstNum && calculator.operator && calculator.secondNum) {
      try {
        const result = getResult(
          calculator.firstNum,
          calculator.secondNum,
          calculator.operator,
        );
        dispatch(setResult(result));
        dispatch(setFirstNum(result));
        dispatch(setSecondNum(null));
      } catch (err) {
        dispatch(setError('Errore'));
      }
    }
  };
};

const getResult = (
  firstNum: number,
  secondNum: number,
  operator: string,
): number => {
  switch (operator) {
    case Operator.PLUS:
      return firstNum + secondNum;
    case Operator.MINUS:
      return firstNum - secondNum;
    case Operator.FOR:
      return firstNum * secondNum;
    case Operator.DIVIDE:
      if (secondNum === 0) {
        // TODO fix exception
        throw new Error('Errore');
      }
      return firstNum / secondNum;
    default:
      return 0;
  }
};

export const {
  setFirstNum,
  setSecondNum,
  setOperator,
  setResult,
  resetState,
  setNumber,
  setError,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
