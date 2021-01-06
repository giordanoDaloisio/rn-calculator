import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState } from '../model/calculatorState';
import { Operator } from '../model/operator';

const initialState: CalculatorState = {
  firstNum: null,
  operator: null,
  secondNum: null,
  result: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState as CalculatorState,
  reducers: {
    setFirstNum(state, action: PayloadAction<number>) {
      state.firstNum = action.payload;
    },
    setOperator(state, action: PayloadAction<Operator>) {
      state.operator = action.payload;
    },
    setSecondNum(state, action: PayloadAction<number | null>) {
      state.secondNum = action.payload;
    },
    calculateResult(state) {
      if (state.firstNum && state.secondNum && state.operator) {
        state.result = getResult(
          state.firstNum,
          state.secondNum,
          state.operator,
        );
        state.firstNum = state.result;
        state.secondNum = null;
      }
    },
    resetState(state) {
      state.firstNum = null;
      state.secondNum = null;
      state.operator = null;
      state.result = null;
    },
    setNumber(state, action: PayloadAction<number>) {
      !state.operator
        ? (state.firstNum = action.payload)
        : (state.secondNum = action.payload);
    },
  },
});

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
        return 0;
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
  calculateResult,
  resetState,
  setNumber,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
