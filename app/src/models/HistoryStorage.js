"use strict";

const db = require('../config/db');

//class명은 파일이름과 동일한게 좋음
class HistoryStorage{

    static async save(uid){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO visithistory(uid) VALUES(?);";
            
            db.query(query,[uid],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            });
        });
        
    }



}
module.exports = HistoryStorage;
