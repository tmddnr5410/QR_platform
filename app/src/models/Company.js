"use strict";

const CompanyStorage = require("./CompanyStorage");

class Company{

    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try{
            const {cpnid,psword} = await CompanyStorage.getCompanyInfo(client.cpnid);
                if(cpnid == client.cpnid && psword === client.psword){
                    return {success:true};
                }
                else{
                    return {success: false, msg:"회원 정보가 일치하지 않습니다"};
                }
        }catch(err){
            return {success:false,msg:"회원 정보가 일치하지 않습니다"};
        }
    }
    async register(){
        const client = this.body;

        try{
            const response = await CompanyStorage.save(client);
            return response;
        } catch(err){
            const er = {success:false, msg:err};
            
            return er;
        }

    }
    
    async edit(){
        const client = this.body;

        try{
            const response = await CompanyStorage.edit(client);
            return response;
        } catch(err){
            const er = {success:false, msg:err};
            
            return er;
        }
    }

}

module.exports = Company;
