import {nav,getData,display} from './navbar.js';
let navbar=nav();
document.getElementById("main").innerHTML=navbar;

let un=JSON.parse(localStorage.getItem("showuser"));
document.getElementById("username").innerText=un.Name;
document.getElementById("searchbox").addEventListener("keypress",Wao);
let pare=document.querySelector("#container");

let interval;
 function Wao(){
  if(interval){
    clearTimeout(interval);
  }
  interval=setTimeout(()=>{
   pta();
  },1000)
   
  }

  async function pta(){
    try {
      let inp=document.querySelector("#searchbox").value;
      let data=await getData(inp);
      
      //  console.log(data.meals[0].strMeal);
      //  console.log(data);
       display(data,pare);
      
    } 
    catch (error) {
      console.log("error2");
    }}





