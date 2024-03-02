import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './api';
import { STORAGE_KEY } from './settings';

export const useUsers = ({
  onSuccess = () => {},
  onError = (err) => {
    console.log(err);
  },
} = {}) =>
  useQuery({
    suspense: true,
    queryKey: [STORAGE_KEY],
    queryFn: fetchUsers,
    onSuccess,
    onError,
  });
