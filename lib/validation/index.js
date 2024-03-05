import * as yup from 'yup';

const addUserSchema = yup
  .object({
    email: yup.string().trim().max(300),
    nickname: yup.string().trim().max(300),
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
    email: yup.string().trim().max(300),
    nickname: yup.string().trim().max(300),
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
