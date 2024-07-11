import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Get readable error message
 * @param errorObj
 * @returns
 */
export const getReadableErrorMessage = (errorObj) => {
  const error = { message: '' };
  const keys = Object.keys(errorObj);
  for (let index = 0; index < keys.length; index++) {
    error.message = errorObj[keys[index]];
    break;
  }
  return error;
};

/**
 * Exception Factory error message
 * @param errorObj
 * @returns
 */
export const exceptionFactory = (error: any) => {
  const err = getReadableErrorMessage(error[0].constraints);
  return new HttpException(err, HttpStatus.BAD_REQUEST);
};
