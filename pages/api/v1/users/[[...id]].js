import { createRouter, expressWrapper } from 'next-connect';
import cors from 'cors';

import {
  updateUser,
  removeUser,
  getUsers,
  addUser,
} from '@/lib/api-functions/server/users/controllers';

const router = createRouter({
  attachParams: true,
});
const baseRoute = '/api/v1/users/:id?';

router

  .use(expressWrapper(cors()))
  .get(baseRoute, (req, res) => {
    getUsers(req, res);
  })
  .post(baseRoute, (req, res) => {
    addUser(req, res);
  })
  .put(baseRoute, async (req, res) => {
    updateUser(req, res);
  })
  .delete(baseRoute, async (req, res) => {
    removeUser(req, res);
  });

export default router.handler();

