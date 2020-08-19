const express = require('express');
const app = express();

app.get('/Muneefah', (req, res) => {
	res.send([ 'Ahmed', 'Muneefah', 'Ayrah' ]);
});

app.listen(3001, () => {
	console.log('Sever listening on Port 3001!');
});
