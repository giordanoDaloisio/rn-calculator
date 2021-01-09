import { Operator } from './operator';

export interface CalculatorState {
  firstNum: number | null;
  operator: Operator | null;
  secondNum: number | null;
  result: number | null;
  error: string | null;
}
