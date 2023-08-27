
const HistoryStorage = require("../../models/HistoryStorage");

class AdminCtrl{
    static async showHistory(req,res){
        const data = await HistoryStorage.getHistory();
        console.log(data);
        res.render("admin/Admin_log",{arr_history:data});


    }
}

module.exports = AdminCtrl;