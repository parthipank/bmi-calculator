export const UpdateBmi = (bmi) => {
  return {
    type: 'UPDATE_BMI',
    bmi,
  };
};

export const UpdateGender = (gender) => {
  return {
    type: 'UPDATE_GENDER',
    gender,
  };
};

export const UpdateHeight = (height) => {
  return {
    type: 'UPDATE_HEIGHT',
    height,
  };
};

export const UpdateWeight = (weight) => {
  return {
    type: 'UPDATE_WEIGHT',
    weight,
  };
};

export const UpdateAge = (age) => {
  return {
    type: 'UPDATE_AGE',
    age,
  };
};

export const ResetStore = (bmi) => {
  return {
    type: 'RESET_STORE',
    bmi: 0.0,
    gender: 'male',
    height: 20,
    weight: 0,
    age: 0,
  };
};
