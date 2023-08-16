"use strict";

const express = require("express");
const router = express.Router();

const HomeCtrl = require('./HomeCtrl');
const UserCtrl = require('./UserCtrl');
const CompanyCtrl = require('./CompanyCtrl');
const QRCtrl = require('./QRCtrl');
const AdminCtrl=require("./AdminCtrl");

router.get("/",HomeCtrl.home);
//메인 화면 라우팅

router.get("/login",HomeCtrl.login);
//로그인 화면 라우팅

router.get("/company_login",HomeCtrl.company_login);
//로그인 화면 라우팅

router.get("/register",HomeCtrl.register);
//회원가입 화면 라우팅

router.get("/company_register",HomeCtrl.company_register);
//회원가입 화면 라우팅

router.get("/main",HomeCtrl.main);
//메인 화면 라우팅

router.get("/show/:cpnID",CompanyCtrl.show);
//QR인식후 화면 라우팅

router.get("/mypage",HomeCtrl.mypage);
//마이페이지 화면 라우팅

router.get("/Admin",HomeCtrl.Admin);
//관리자 페이지화면 라우팅

router.get("/Admin_parti",CompanyCtrl.Admin_parti);
//관리자 페이지화면 라우팅

router.get("/Audience",HomeCtrl.Audience);
//사용자 페이지화면 라우팅

router.get("/Company",HomeCtrl.Company);
//사용자 페이지화면 라우팅

router.get("/Company_page",HomeCtrl.Company_page);
//사용자 페이지화면 라우팅

router.get("/Admin_log",AdminCtrl.showHistory);
//사용자 페이지화면 라우팅


router.get("/logout", HomeCtrl.logout);
// 로그아웃 -> 세션 삭제

router.get("/qr",QRCtrl.showQRmaker);

router.post("/madeqr",QRCtrl.madeQR);




//회원측 API

//login경로로 포스토 요청이 오면 실행
router.post("/userlogin",UserCtrl.processLogin);

//register경로로 포스트요청이 오면 실행
router.post("/userregister",UserCtrl.processRegister);

//register경로로 포스트요청이 오면 실행
router.post("/useredit",UserCtrl.processEdit);



//기업측 API

//login경로로 포스토 요청이 오면 실행
router.post("/cpnlogin",CompanyCtrl.processLogin);

//register경로로 포스트요청이 오면 실행
router.post("/cpnregister",CompanyCtrl.processRegister);

//register경로로 포스트요청이 오면 실행
router.post("/cpnedit",CompanyCtrl.processEdit);

module.exports = router;