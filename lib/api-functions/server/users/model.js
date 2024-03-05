import mongoose from 'mongoose';
const { Schema } = mongoose;

const guessSchema = new Schema({
  gameID: {
    type: String,
  },
  selectedTeam: {
    type: String,
  },
  _id: false,
});

export const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
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
