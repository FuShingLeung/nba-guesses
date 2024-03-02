import { addUserSchema, updateUserSchema } from '@/lib/validation/';
import {
  fetchUser,
  fetchUsers,
  add,
  update,
  remove,
} from '@/lib/api-functions/server/users/queries';

const getUsers = async (req, res) => {
  const { id } = req.params;
  console.log('🚀 ~ file: controllers.js:9 ~ getUsers ~ id:', id);

  try {
    let data = [];
    if (id) {
      data = await fetchUser(id);
    } else {
      data = await fetchUsers();
    }
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const addUser = async (req, res) => {
  let userData = { ...req.body };

  console.info(userData);

  try {
    userData = await addUserSchema.validate(userData);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const result = await add(userData);
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to update' });
  }

  let updates = { ...req.body };

  try {
    updates = await updateUserSchema.validate(updates);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const result = await update(id, updates);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    return res.status(200).send({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  console.log('🚀 ~ file: controllers.js:99 ~ removeProduct ~ id:', id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to delete' });
  }

  const query = {
    _id: id,
  };

  // if (!isAdmin) {
  //   query.owner = req.user.sub;
  // }

  try {
    const result = await remove(id);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export { getUsers, addUser, updateUser, removeUser };
