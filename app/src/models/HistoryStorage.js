"use strict";

const db = require('../config/db');

//class명은 파일이름과 동일한게 좋음
class HistoryStorage{


    static async getHistory(){
        return new Promise((resolve,reject)=>{
            const query = "SELECT * from visithistory;";
            
            db.query(query,[],(err,data)=>{
                if(err) throw reject(`${err}`);
                resolve(data);
            });
        });
    }

    static async save(uid,cpnid){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO visithistory(uid,cpnid) VALUES(?,?);";
            
            db.query(query,[uid,cpnid],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            });
        });
        
    }

}
module.exports = HistoryStorage;
