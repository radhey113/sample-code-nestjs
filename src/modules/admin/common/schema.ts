export const SwaggerSchema = {
  SIGNUP: {
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'Add email of admin ',
          description: 'Enter admin email',
          require: true,
        },
        firstName: {
          type: 'string',
          example: 'Add firstname of admin',
          description: 'Enter admin firstname',
          require: true,
        },
        lastName: {
          type: 'string',
          example: 'Add lastname of admin',
          description: 'Enter admin lastname',
          require: true,
        },
        password: {
          type: 'string',
          example: 'XXXX-XXXX',
          description: 'Admin password',
          require: true,
        },
      },
    },
  },
};
