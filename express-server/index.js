import express from 'express';
const app = express();
const host = '127.0.0.1';
const port = 8000;

app.get('/hello', (req, res) => {
	res.cookie('token', 'sdawqdwqcasdqdcaxsc1222331dsasd', {
		domain: '',
		path: '/',
		secure: true,
		expires: new Date()
	});
	res.clearCookie('token');
	console.log('GET method');
	// res.send('Hi');
	res.end();
});

app.listen(port, () => {
	console.log('Server online', host, ':', port);
});
