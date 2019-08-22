var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
const pool = new Pool()


router.get('/', function(req, res, next) {
	pool.query('SELECT * FROM companies', (err, resdb) => {
		res.send(resdb.rows);
		pool.end();
	});
});

module.exports = router;