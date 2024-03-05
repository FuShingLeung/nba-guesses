import { useState } from 'react';
import axios from 'axios';

const usePostRequest = (user) => {
  const [requestSent, setRequestSent] = useState(false);
  if (user && !requestSent) {
    const postData = {
      email: user.email,
      nickname: user.nickname,
    };

    const url = '/api/v1/users';

    axios
      .post(url, postData)
      .then((response) => {
        console.log('Response data:', response.data);
        setRequestSent(true);
      })
      .catch((error) => {
        console.error('Error:', error.message);
        setRequestSent(true);
      });
  }
};

export default usePostRequest;
