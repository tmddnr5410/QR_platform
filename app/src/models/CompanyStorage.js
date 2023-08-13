"use strict";

const db= require('../config/db');

class CompanyStorage{

    static getCompanyInfo(cid){
        return new Promise((resolve,reject)=>{
        const query ="select * FROM Company where cpnid = ?;";
        db.query(query,[cid],(err,data)=>{
            if(err) throw reject(`${err}`);
            resolve(data);
        });
    });
    }


    static async save(cpnInfo){
        return new Promise((resolve,reject)=>{
            const query = 'insert INTO Company(cpnid,name,psword,intro) values(?,?,?,?);';
            db.query(query,[cpnInfo.cpnid,cpnInfo.name,cpnInfo.psword,cpnInfo.intro],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            });
        })
    }

    static async edit(cpnInfo){
        return new Promise((resolve,reject)=>{
            const query = `UPDATE Company
            SET cpnid = ?, psword = ?, name = ?, intro = ?
            where id = ?`;
            
            db.query(query,[cpnInfo.cpnid,cpnInfo.psword,cpnInfo.name,cpnInfo.intro,cpnInfo.id],(err)=>{
                if(err) throw reject(`${err}`);
                resolve({success:true});
            })

        })
    }

}

module.exports = CompanyStorage;