var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	const { Client } = require('pg')
	const client = new Client()
	client.connect()
	client
	.query('SELECT * FROM users')
	.then(resdb => {
		// console.log(resdb.rows[0]);
		res.send(resdb.rows);
	})
	.catch(e => console.error(e.stack))
});

module.exports = router;
