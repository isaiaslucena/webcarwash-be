var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
const pool = new Pool();

router.get('/', function(req, res, next) {
	pool.query('SELECT id,name,email FROM users', (err, resdb) => {
		res.send(resdb.rows);
		pool.end();
	});
});

router.post('/create', function (req, res, next) {
	console.log(req);
	// pool.query('INSERT id,name,email FROM users', (err, resdb) => {
	// 	res.send(resdb.rows);
	// 	pool.end();
	// });
});

module.exports = router;
