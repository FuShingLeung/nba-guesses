import axios from 'axios';

const { HOST = 'http://localhost:3000' } = process.env;

export const USERS_ENDPOINT = `${HOST}/api/v1/users/`;

export const fetchUsers = async () => {
  const { data } = await axios(USERS_ENDPOINT);
  // await new Promise((r) => setTimeout(r, 1000)); // simulate server delay
  return data;
};

export const addUser = async (data) => {
  console.log('about to add', data);
  const response = await axios({
    method: 'POST',
    url: USERS_ENDPOINT,
    data,
  });
  return response.data;
};

export const updateUser = async ({ _id, ...data }) => {
  const response = await axios({
    url: `${USERS_ENDPOINT}${_id}`,
    method: 'PUT',
    data,
  });
  return response.data;
};

export const deleteUser = async (id) => {
  return await axios({
    method: 'DELETE',
    url: `${USERS_ENDPOINT}${id}`,
  });
};
