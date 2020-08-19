const express = require('express');
const app = express();

app.get('/Safi', (req, res) => {
	res.send([ 'Safi', 'Asra', 'Irha' ]);
});

app.listen(9900, () => {
	console.log('Sever listening on Port 3000!');
});
