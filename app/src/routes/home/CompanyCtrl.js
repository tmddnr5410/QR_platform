
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
      //행의 data[0].name, data[0].intro를 받는 변수
      //{DB속성값 : 변수이름1, DB속성값 : 변수이름2}로 사용
      HistoryStorage.save(userId,cpnID);
      res.render("home/show",{cpnName:cpnName,cpnIntro:cpnIntro});
    } else {
      res.redirect("/login");
    }
  }

}

module.exports = CompanyCtrl;
