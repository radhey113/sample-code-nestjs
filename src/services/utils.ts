export const getReadableErrorMessage = (errorObj) => {
  const error = { message: '' };
  const keys = Object.keys(errorObj);
  for (let index = 0; index < keys.length; index++) {
    error.message = errorObj[keys[index]];
    break;
  }
  return error;
};
