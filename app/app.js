//모듈
const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const dotenv  = require("dotenv");

//session용
const session = require("express-session");
const cookieParser = require('cookie-parser');

dotenv.config();

// 


//라우팅

const home = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views"); //app.set("views", "view 파일경로")
app.set("view engine","ejs"); //app.set("{뷰파일 해석할 엔진}","{엔진 이름}")

app.use(express.static(`${__dirname}/src/public`));

//body parser middleware선언
app.use(bodyParser.json()); 
//url을 통해 전달되는 데이터에 한글,공백이 있는경우 문제 해결
app.use(bodyParser.urlencoded({extended: true}));


app.use(cookieParser());
//세션용 미들웨어 등록
app.use(session({
    secret:'asd',
    resave:false,
    saveUninitialized:false
}))


app.use("/",home); // use -> 미들 웨어를 등록해주는 메소드

module.exports = app;
//