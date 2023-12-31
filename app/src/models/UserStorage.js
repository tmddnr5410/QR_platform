"use strict";

const db = require('../config/db');

//class명은 파일이름과 동일한게 좋음
class UserStorage{
    
     static getUsersInfo(id){
        return new Promise((resolve,reject) => {
            const query = "SELECT * FROM users where uid = ?;";
            db.query(query,[id],(err,data)=>{
                if(err) throw reject(`${err}`);
                //console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static getUsersName(id){
        return new Promise((resolve,reject) => {
            const query = "SELECT name FROM users where uid = ?;";
            db.query(query,[id],(err,data)=>{
                if(err) throw reject(`${err}`);
                //console.log(data[0]);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve,reject) => {
            const query = `INSERT INTO users(uid,name,psword,affil,age) 
            VALUES(?,?,?,?,?);`;
            db.query(query,[userInfo.uid,userInfo.name,userInfo.psword],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            });
        });
        
    }
    
    static async edit(userInfo){
        return new Promise((resolve,reject)=>{
            const query = `UPDATE users
            SET uid = ?,name = ?,age=?,affil=?,psword=?
            where id = ?;
            `;
            db.query(query,[userInfo.uid,userInfo.name,userInfo.age,userInfo.affil,userInfo.psword],(err)=>{
                if(err) throw reject(`${err.message}`);
                resolve({success:true});
            })

        })
    }
}
module.exports = UserStorage;
