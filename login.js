function fun3(event){
    event.preventDefault();
    let cmail=document.getElementById("Email").value;
    let cpass=document.getElementById("Password").value;
    let userinfo= JSON.parse(localStorage.getItem("usinfo"));
    
    let ans=userinfo.filter((ele)=>{
        return ele.Email==cmail&&ele.Password==cpass;
    })
    localStorage.setItem("showuser",JSON.stringify(ans[0]));
    console.log(ans);
     if(ans.length==0)
     {
        alert("galat hai password! check kro bewakoof!")
    }
    else{
        location.href="search.html";
    }
}
document.getElementById("login").addEventListener("submit",fun3);