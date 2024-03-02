import * as yup from 'yup';

const addUserSchema = yup
  .object({
    userID: yup.string().trim().max(300).required(),
    totalGuesses: yup.number(),
    correctGuesses: yup.number(),
    guessHistory: yup.array().of(
      yup.object().shape({
        gameID: yup.string().trim(),
        selectedTeam: yup.string(),
      }),
    ),
  })
  .required();

const updateUserSchema = yup
  .object({
    userID: yup.string().trim().max(300).required(),
    totalGuesses: yup.number(),
    correctGuesses: yup.number(),
    guessHistory: yup.array().of(
      yup.object().shape({
        gameID: yup.string().trim(),
        selectedTeam: yup.string(),
      }),
    ),
  })
  .required();

export { addUserSchema, updateUserSchema };
