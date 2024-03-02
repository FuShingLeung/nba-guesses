import db from '@/lib/api-functions/server/db';
import User from '@/lib/api-functions/server/users/model';

export const fetchUsers = async (query = {}) => {
  return await User.find(query).exec();
};

export const fetchUser = async (userID) => {
  return await User.findById(userID).exec();
};

export const add = async (data) => {
  const newUser = new User(data);
  const result = await newUser.save();
  return result;
};

export const update = async (userID, updates) => {
  return await User.updateOne({ _id: userID }, updates);
};

export const remove = async (userID) => {
  return await User.deleteOne({ _id: userID });
};
