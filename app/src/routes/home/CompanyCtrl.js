
const HistoryStorage = require("../../models/HistoryStorage");
const UserStorage = require("../../models/UserStorage");



class CompanyCtrl {

  static async show(req, res) {
    const logined = req.session.is_logined;
    if (logined) {
      const userId = req.session.userid;
      const {name} = await UserStorage.getUsersName(userId);
      console.log(name);
      console.log({name});
      HistoryStorage.save(userId);
      res.render("home/show",{name});
    } else {
      res.redirect("/login");
    }
  }

}

module.exports = CompanyCtrl;