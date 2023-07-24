"use strict";

//console.log("log From login.js !!");

const uid = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginbtn = document.querySelector("#button");

loginbtn.addEventListener("click",login);

function login(){
    const req ={
        uid: uid.value,
        psword: psword.value,
    };

    fetch("/login", {
      //post방식으로 보낼것이다
        method : "POST",
        headers:{
          //제이슨형태로 보낼것이다
            "Content-Type":"application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => {
        
        console.log(res);
        if (res.success) {
        location.href = "/main";
        }
        else {
            alert(res);
        }
      })
      .catch((err) => {
        console.err(new Error("로그인중 에러 발생"));
      });

}
