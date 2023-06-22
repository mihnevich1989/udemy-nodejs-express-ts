import express from 'express';
import { userRouter } from './users/users.js';

const app = express();
const host = 'http://localhost.com';
const port = 8000;

app.get('/', (req, res) => {
	res.end();
});

app.use('/users', userRouter);

app.listen(port, () => {
	console.log('Server online', host, ':', port);
});
