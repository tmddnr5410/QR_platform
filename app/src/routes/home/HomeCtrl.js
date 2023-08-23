const UserStorage = require("../../models/UserStorage");
const CompanyStorage = require("../../models/CompanyStorage");

class HomeCtrl {
  static home(req, res) {
    //console.log(req.session);
    res.render("home/index");
  }

  static async main(req, res) {
    // console.log(userid);
    const userid = req.session.userid;
    
    if(userid){

    const {name:username} = await UserStorage.getUsersName(userid);
    // console.log(username);

    res.render("home/main",{userid , islogined:true, username});
    
    }
    else{
      res.render("home/main",{islogined:false});
    }
  }

  static login(req, res) {
    res.render("home/login");
  }

  static company_login(req, res) {
    res.render("home/company_login");
  }

  static register(req, res) {
    res.render("home/register");
  }

  static company_register(req, res) {
    res.render("home/company_register");
  }

  // static mypage(req, res) {
  //   res.render("home/mypage");
  // }

  //mypage 정보 출력
  static async mypage(req, res) {
    const userid = req.session.userid;
    if(userid){
    const {name:username, psword:psword, affil:affil, age:age} = await UserStorage.getUsersInfo(userid);
    res.render("home/mypage",{islogined:true, userid , username, psword, affil, age});
    }
    else{
      res.render("home/mypage",{islogined:false});
    }
  }

  static async Audience(req, res) {
    const userid = req.session.userid;
    if(userid){
    const {name:username, psword:psword, affil:affil, age:age} = await UserStorage.getUsersInfo(userid);
    res.render("home/Audience",{islogined:true, userid , username, psword, affil, age});
    }
    else{
      res.render("home/Audience",{islogined:false});
    }
  }

  static async Company_page(req, res) {
    const Companyid = req.session.Companyid;
    
    if(Companyid){
    const {cpnid:cpnid, name:name, intro:intro} = await CompanyStorage.getCompanyInfo(Companyid);
      
    res.render("home/Company_page",{islogined:true, cpnid ,name, intro});
    }
    else{
      res.render("home/Company_page",{islogined:false});
    }
  }

  static async Company(req, res) {
    const Companyid = req.session.Companyid;
    
    if(Companyid){
    const {cpnid:cpnid, name:name, intro:intro} = await CompanyStorage.getCompanyInfo(Companyid);
      
    res.render("home/Company",{islogined:true, cpnid ,name, intro});
    }
    else{
      res.render("home/Company",{islogined:false});
    }
  }

  static Admin(req, res) {
    res.render("home/Admin");
  }

  static Admin_log(req, res) {
    res.render("home/Admin_log");
  }

  static logout(req, res){
    req.session.destroy();
    res.redirect("/main");
  }

}

module.exports = HomeCtrl;
