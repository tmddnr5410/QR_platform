
const HistoryStorage = require("../../models/HistoryStorage");
const CompanyStorage = require("../../models/CompanyStorage");


class CompanyCtrl {

  static async show(req, res) {
    var cpnID = req.params.cpnID;
    const logined = req.session.is_logined;
    if (logined) {
      const userId = req.session.userid;
      const data = await CompanyStorage.getCompanyInfo(cpnID);
      const {name:cpnName , intro:cpnIntro} = data[0];
      HistoryStorage.save(userId);
      res.render("home/show",{cpnName:cpnName,cpnIntro:cpnIntro});
    } else {
      res.redirect("/login");
    }
  }

}

module.exports = CompanyCtrl;
