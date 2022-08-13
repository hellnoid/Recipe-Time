import {nav,display} from './navbar.js';
let navbar=nav();
document.getElementById("main").innerHTML=navbar;

let un=JSON.parse(localStorage.getItem("showuser"));
document.getElementById("username").innerText=un.Name;

let mai=document.querySelector("#mai");
async function getAnd(){
    try {
        let url="https://www.themealdb.com/api/json/v1/1/random.php";
        let res= await fetch(url);
        let data=await res.json();
        display(data,mai);
    } catch (error) {
        
    }
}
getAnd();