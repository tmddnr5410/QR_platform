"use strict";

const db= require('../config/db');

class CompanyStorage{

    static getCompanyInfo(cid){
        return new Promise((resolve,reject)=>{
        const query ="select name,intro FROM Company where cpnid = ?;";
        db.query(query,[cid],(err,data)=>{
            if(err) throw reject(`${err}`);
            resolve(data);
        });
    });
    }

}

module.exports = CompanyStorage;