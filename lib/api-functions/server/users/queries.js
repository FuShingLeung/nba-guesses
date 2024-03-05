import db from '@/lib/api-functions/server/db';
import User from '@/lib/api-functions/server/users/model';

export const fetchUsers = async (query = {}) => {
  return await User.find(query).exec();
};

export const fetchUser = async (id) => {
  return await User.findById(id).exec();
};

export const fetchUserByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};

export const add = async (data) => {
  const newUser = new User(data);
  const result = await newUser.save();
  return result;
};

export const update = async (id, updates) => {
  return await User.updateOne({ _id: id }, updates);
};

export const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};
