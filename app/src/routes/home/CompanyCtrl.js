
const HistoryStorage = require("../../models/HistoryStorage");
const CompanyStorage = require("../../models/CompanyStorage");
const Company = require("../../models/Company");

class CompanyCtrl {

  static async show(req, res) {
    var cpnID = req.params.cpnID;
    const logined = req.session.is_logined;
    if (logined) {
      const userId = req.session.userid;
      const data = await CompanyStorage.getCompanyInfo(cpnID);
      
      console.log(data);
      const {name:cpnName , intro:cpnIntro} = data;
      console.log(cpnName);
      //행의 data[0].name, data[0].intro를 받는 변수
      //{DB속성값 : 변수이름1, DB속성값 : 변수이름2}로 사용
      
      HistoryStorage.save(userId,cpnID);
      //userid, companyid 방문기록 저장

      res.render("home/show",{cpnName:cpnName,cpnIntro:cpnIntro});
    } else {
      res.redirect("/login");
    }
  }

  
  static async Admin_parti(req, res) {
    const data = await CompanyStorage.getCompanyName();
    console.log(data);
    res.render("admin/Admin_parti",{ name:data});
  }

  static async processLogin(req, res) {
    //console.log(req.body);
    const company = new Company(req.body);
    const response = await company.login();
    

    //로그인 성공시 세션 생성
    if (response.success) {
      //console.log("success")
      req.session.is_logined = true;
      req.session.Companyid = req.body.cpnid;
    }
    return res.json(response);
  }

  static async processRegister(req, res) {
    const company = new Company(req.body);
    const response = await company.register();
    console.log(response);
    return res.json(response);
  }

  static async processEdit(req,res){
    const cpnID = req.params.cpnID;
    const company = new Company(req.body);
    const response = await company.edit(cpnID);

    return res.json(response);
  }

  
}

module.exports = CompanyCtrl;
