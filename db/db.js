const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "game",
  password: "test123",
  database: "games"
});

db.connect((err) =>{
  if (!err)
 console.log ('db connection succeded')
 else
 console.log('dv connection failed \,n error:' + JSON.stringify(err, undefined, 2));
 
});





module.exports = {
  query: (text, params) => db.query(text, params)
}

/*db.connect ((err) => {
  if (err) throw err;

  db.query("SELECT * FROM gamelist", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/


