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

router.post('/', function (req, res, next) {
	let caction = req.param('action');
	switch (caction) {
		case "login":
			console.log("login paramenter requested via POST");
			console.log(req);
			break;
		case "logout":
			console.log("logout paramenter requested via POST");
			console.log(req);
			break;
		default:
			break;
	}
	// pool.query('SELECT * FROM users WHERE email = 'isaiasneto@gmail.com' AND password = crypt('123', gen_salt('bf'))', (err, resdb) => {
	// 	res.send(resdb.rows);
	// 	pool.end();
	// });
});

router.post('/create', function (req, res, next) {
	console.log(req);
	// pool.query('INSERT id,name,email FROM users', (err, resdb) => {
	// 	res.send(resdb.rows);
	// 	pool.end();
	// });
});

module.exports = router;