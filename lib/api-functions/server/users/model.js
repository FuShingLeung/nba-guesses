import mongoose from 'mongoose';
const { Schema } = mongoose;

const guessSchema = new Schema({
  gameID: {
    type: String,
    required: true,
  },
  selectedTeam: {
    type: String,
    required: true,
  },
  _id: false,
});

export const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  totalGuesses: {
    type: Number,
    default: 0,
  },
  correctGuesses: {
    type: Number,
    default: 0,
  },
  guessHistory: [guessSchema],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
