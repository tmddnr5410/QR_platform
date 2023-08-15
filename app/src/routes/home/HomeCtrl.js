const UserStorage = require("../../models/UserStorage");


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

  static Admin(req, res) {
    res.render("home/Admin");
  }

  static Audience(req, res) {
    res.render("home/Audience");
  }

  static Company(req, res) {
    res.render("home/Company");
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
