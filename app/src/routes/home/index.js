"use strict";

const express = require("express");
const router = express.Router();

const HomeCtrl = require('./HomeCtrl');
const UserCtrl = require('./UserCtrl');
const CompanyCtrl = require('./CompanyCtrl');

router.get("/",HomeCtrl.home);
//메인 화면 라우팅
router.get("/login",HomeCtrl.login);
//로그인 화면 라우팅
router.get("/register",HomeCtrl.register);
//회원가입 화면 라우팅
router.get("/main",HomeCtrl.main);
//메인 화면 라우팅


// router.get("/logout", function(req,res,next){
//     req.session.destroy();
//     res.clearCookie('sid');
  
//     res.redirect("/main")
//   })
// 로그아웃 -> 세션 삭제

router.get("/show/:cpnID",CompanyCtrl.show);
//QR인식후 화면 라우팅




//login경로로 포스토 요청이 오면 실행
router.post("/login",UserCtrl.processLogin);

//register경로로 포스트요청이 오면 실행
router.post("/register",UserCtrl.processRegister);




module.exports = router;