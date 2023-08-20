"use strict";

const intro = document.querySelector("#intro"),
    cpnname = document.querySelector("#name"),
    editbtn = document.querySelector("#editbtn");
    
    editbtn.addEventListener("click",edit);

    function edit(){
        const req ={
            intro: intro.value,
            cpnname: cpnname.value,
        };

        fetch(`/cpnedit`,{
            //post방식
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(req),

        }).then((res)=>res.json)
        .then((res)=>{
            console.log(res);
            if (res.success) {
                location.href = "/company";
                }
                else {
                    alert(res);
                }
        })
    }
