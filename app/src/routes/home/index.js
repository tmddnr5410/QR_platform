"use strict";

const express = require("express");
const router = express.Router();

const HomeCtrl = require('./HomeCtrl');
const UserCtrl = require('./UserCtrl');
const CompanyCtrl = require('./CompanyCtrl');
const QRCtrl = require('./QRCtrl');


router.get("/",HomeCtrl.home);
//메인 화면 라우팅

router.get("/login",HomeCtrl.login);
//로그인 화면 라우팅

router.get("/register",HomeCtrl.register);
//회원가입 화면 라우팅

router.get("/main",HomeCtrl.main);
//메인 화면 라우팅

router.get("/show/:cpnID",CompanyCtrl.show);
//QR인식후 화면 라우팅

router.get("/mypage",HomeCtrl.mypage);
//마이페이지 화면 라우팅

router.get("/Admin",HomeCtrl.Admin);
//관리자 페이지화면 라우팅

router.get("/Audience",HomeCtrl.Audience);
//사용자 페이지화면 라우팅

router.get("/Company",HomeCtrl.Company);
//사용자 페이지화면 라우팅


router.get("/logout", HomeCtrl.logout);
// 로그아웃 -> 세션 삭제

router.get("/qr",QRCtrl.showQRmaker);

router.post("/madeqr",QRCtrl.madeQR);

//login경로로 포스토 요청이 오면 실행
router.post("/login",UserCtrl.processLogin);

//register경로로 포스트요청이 오면 실행
router.post("/register",UserCtrl.processRegister);



module.exports = router;