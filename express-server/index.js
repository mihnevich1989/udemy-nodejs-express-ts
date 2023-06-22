import express from 'express';
const app = express();
const host = '127.0.0.1';
const port = 8000;

app.all('/hello', (req, res, next) => {
	console.log('all');
	next();
});

const cb = (req, res, next) => {
	console.log('CB');
	next();
};
app.route('/user')
	.get('/hello', [cb, cb, cb, (req, res) => {
		res.send('GET: Hello');
	}])
	.post('/hello', (req, res) => {
		res.send('POST: Hello');
	});

app.listen(port, () => {
	console.log('Server online', host, ':', port);
});
