import express from 'express';
const app = express();
const host = '127.0.0.1';
const port = 8000;

app.get('/hello', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => {
	console.log('Server online', host, ':', port);
});
