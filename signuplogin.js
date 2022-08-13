function fun1(event){
    event.preventDefault();
    console.log("yu");
    document.getElementById("otp").style.display="flex";
    let ranotp=Math.floor(Math.random()*1000+1000);
    alert("OTP"+ranotp);
    localStorage.setItem("otp",ranotp);
}

document.getElementById("subotp").addEventListener("submit",fun1);

let userinfo=JSON.parse(localStorage.getItem("usinfo"))||[];
function fun2(event){
    event.preventDefault();
    let inotp=document.querySelector("#otpin").value;
    let otp=localStorage.getItem("otp");
    if(otp==inotp){
        document.getElementById("otp").style.display="none";
        let obj={
            "Name":document.getElementById("name").value,
            "Email":document.getElementById("email").value,
            "Password":document.getElementById("password").value,
        }
        userinfo.push(obj);
        localStorage.setItem("usinfo",JSON.stringify(userinfo));
        location.href="login.html";
    }
    else{
        alert("Wrong OTP! sucker!!!!");
    }
}
document.getElementById("otp").addEventListener("submit",fun2);
