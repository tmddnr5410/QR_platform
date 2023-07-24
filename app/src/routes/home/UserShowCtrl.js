const UserStorage = require("../../models/UserStorage");

class UserShowCtrl {

  static async show(req, res) {
    const logined = req.session.is_logined;
    //console.log(user);
    if (logined) {
    new UserStorage();
    const userId = req.session.userid;
    const {name} = await UserStorage.getUsersName(userId);  
      res.render("home/show",{name});
    } else {
      res.redirect("/login");
    }
  }

}

module.exports = UserShowCtrl;
