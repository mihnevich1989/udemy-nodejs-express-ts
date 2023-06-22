import express from 'express';

const userRouter = express.Router();

userRouter.post('/login', (req, res) => {
  res.send('login');
});

userRouter.post('/reqister', (req, res) => {
  res.send('reqister');
});

export { userRouter };
