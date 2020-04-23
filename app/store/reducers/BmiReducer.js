import {
  UPDATE_BMI,
  UPDATE_GENDER,
  UPDATE_HEIGHT,
  UPDATE_WEIGHT,
  UPDATE_AGE,
  RESET_STORE,
} from './types';

const initialState = {
  bmi: 0.0,
  gender: 'male',
  height: 20,
  weight: 0,
  age: 0,
};

const BmiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BMI:
      return {
        ...state,
        bmi: action.bmi,
      };
    case UPDATE_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case UPDATE_HEIGHT:
      return {
        ...state,
        height: action.height,
      };
    case UPDATE_WEIGHT:
      return {
        ...state,
        weight: action.weight,
      };
    case UPDATE_AGE:
      return {
        ...state,
        age: action.age,
      };
    case RESET_STORE:
      return {
        ...state,
        bmi: 0.0,
        gender: action.gender,
        height: action.height,
        weight: action.weight,
        age: action.age,
      };
    default:
      return initialState;
  }
};

export default BmiReducer;
