"use strict";

//console.log("log From register.js !!");

const uid = document.querySelector("#id"),
      name = document.querySelector("#name"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){
    if(!uid.value) return alert("아이디를 입력해주십시오.");
    if (psword.value !== confirmPsword.value ) return alert("비밀번호가 일치하지 않습니다!");

    const req ={
        uid: uid.value,
        name: name.value,
        psword: psword.value,
        //confirmPsword: confirmPsword.value,
    };
    //console.log(req);
    fetch("/register", {
        method : "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => {
        console.log("성공했나");
        if (res.success) {
          console.log(res.success);
        location.href = "/login";
        }
        else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.err(new Error("회원가입중 에러 발생"));
      });

}
