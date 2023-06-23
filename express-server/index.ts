import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const app = express();
const host = 'http://localhost.com';
const port = 8000;

app.use((req, res, next) => {
	console.log('Time ', Date.now());
	next();
});

app.get('/', (req, res) => {
	throw new Error('Error');
	res.send('Home');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err);
	res.status(500).send(err.message);
});

app.listen(port, () => {
	console.log('Server online', host, ':', port);
});
