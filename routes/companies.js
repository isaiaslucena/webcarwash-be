var express = require('express');
var router = express.Router();
const { Client } = require('pg');
const client = new Client();

router.get('/', function(req, res, next) {
	client.connect()
	client
	.query('SELECT * FROM companies')
	.then(resdb => {
		res.send(resdb.rows);
	})
	.catch(e => console.error(e.stack));
});

module.exports = router;
