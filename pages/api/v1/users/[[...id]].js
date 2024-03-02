import { createRouter, expressWrapper } from 'next-connect';
import cors from 'cors';

const router = createRouter();

router
  .use(expressWrapper(cors()))
  .get((req, res) => {
    res.send('GET');
  })
  .post((req, res) => {
    res.json({ message: 'POST' });
  })
  .put(async (req, res) => {
    res.send('PUT');
  })
  .delete(async (req, res) => {
    res.send('DELETE');
  });

export default router.handler();
