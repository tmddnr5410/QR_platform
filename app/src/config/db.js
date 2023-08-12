const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",  
    user: "root", // mysql에 아이디를 넣는다.
    password: "3124", // mysql의 비밀번호를 넣는다.
    database: "qr_platform", //위에서 만든 데이터베이스의 이름을 넣는다.
});

db.connect();

// db.query("SELECT * FROM users",(err,data)=>{
//     if(err)throw err;
//     console.log("====from start db.js====");
//     console.log(data);
//     console.log("====from start db.js====");
// });
// db.query('INSERT INTO visithistory(uid) VALUES("lls");',(err,data)=>{
//         if(err)throw err;
//         console.log("====from start db.js====");
//         console.log(data);
//         console.log("====from start db.js====");
//     });

module.exports =db;


