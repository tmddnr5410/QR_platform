const db = require('./config/db');

const id = "asd";

db.query( "SELECT * FROM users where id = ?;",[id],(err,data)=>{
    if(err) throw reject(`${err}`);
    console.log(data);
} );