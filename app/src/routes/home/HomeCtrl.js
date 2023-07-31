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
    console.log(username);
    res.render("home/main",{userid , islogined:true, username});
    }
    else{
      res.render("home/main",{islogined:false});
    }
  }

  static login(req, res) {
    res.render("home/login");
  }

  static register(req, res) {
    res.render("home/register");
  }

  static mypage(req, res) {
    res.render("home/mypage");
  }

  static logout(req, res){
    req.session.destroy();
    res.redirect("home/main");
  }

}

module.exports = HomeCtrl;
