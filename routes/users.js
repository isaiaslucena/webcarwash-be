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
	let caction = req.body.action;
	let cemail = req.body.email;
	let cpass = req.body.pass;
	switch (caction) {
		case "login":
			pool.query("SELECT name, email, (password = crypt('" + cpass +"', password)) AS passwordmatch FROM users WHERE email = '"+cemail+"'", (err, resdb) => {
				if (resdb.rows) {
					res.send({ passwordmatch: resdb.rows[0].passwordmatch });
				} else {
					res.send({ passwordmatch: false });
				}
			});
			break;
		case "logout":
			res.send("logout paramenter requested via POST");
			break;
		default:
			break;
	}

});

module.exports = router;