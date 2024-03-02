import mongoose from 'mongoose';
const { Schema } = mongoose;

export const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  totalGuesses: {
    type: Number,
    default: 0
  },
  correctGuesses: {
    type: Number,
    default: 0
  },
  guessHistory: [
    {
      gameID: {
        type: String,
        required: true
      },
      selectedTeam: {
        type: String,
        required: true
      }
    }
  ],
});

const User =
  mongoose.models.User || mongoose.model('User', userSchema);
export default User;
