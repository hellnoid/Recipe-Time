function nav(){
    return `<div id="nav">
    <div id="spage"><a href="search.html">Search</a></div>
    <div id="options">
        <div id="rod"><a href="rod.html">Recipe  of the day</a></div>
        <div id="random"><a href="random.html">Random</a></div>
        <div id="usernamed"><p id="username">User Name</p></div>
    </div>
</div>`;
}

async function getData(reci){
    
    try {
       
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${reci}`);
       
        let data=await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log("error1");
    }
}

function display(data,parentNode){
        parentNode.innerHTML="";
         console.log(data.meals);

         data.meals.forEach(ele => {
            let divi=document.createElement("div");  //main

            let im=document.createElement("img");
            im.src=ele.strMealThumb;
    
            let title=document.createElement("h2");
            title.innerText=ele.strMeal;
            
            let cate=document.createElement("p");
            cate.innerText=ele.strCategory;
    
            let region=document.createElement("p");
            region.innerText=ele.strArea;
    
            let instructions=document.createElement("p");
            instructions.innerText=ele.strInstructions;
            
            let divi2=document.createElement("div");
            let divi21=document.createElement("div");
            let divi22=document.createElement("div");
            divi2.setAttribute('id','po');
    
            for(let i=1;i<=20;i++){
                let ingre=document.createElement("p");
                let ing=`strIngredient${i}`;
                ingre.innerText=data.meals[0][ing];
                divi21.append(ingre);
    
                let measure=document.createElement("p");
                let meas=`strMeasure${i}`;
                measure.innerText=data.meals[0][meas];
                divi22.append(measure);
    
            }
        
            divi2.append(divi21,divi22);
            divi.append(im,title,cate,region,instructions,divi2);
            parentNode.append(divi);
         });
       
    
}

function display1(data,parentNode){
    //parentNode.innerHTML="";
     console.log(data.meals);

     data.meals.forEach(ele => {
        let divi=document.createElement("div");  //main

        let im=document.createElement("img");
        im.src=ele.strMealThumb;

        let title=document.createElement("h2");
        title.innerText=ele.strMeal;
        
        let cate=document.createElement("p");
        cate.innerText=ele.strCategory;

        let region=document.createElement("p");
        region.innerText=ele.strArea;

        let instructions=document.createElement("p");
        instructions.innerText=ele.strInstructions;
        
        let divi2=document.createElement("div");
        let divi21=document.createElement("div");
        let divi22=document.createElement("div");
        divi2.setAttribute('id','pop');

        for(let i=1;i<=20;i++){
            let ingre=document.createElement("p");
            let ing=`strIngredient${i}`;
            ingre.innerText=data.meals[0][ing];
            divi21.append(ingre);

            let measure=document.createElement("p");
            let meas=`strMeasure${i}`;
            measure.innerText=data.meals[0][meas];
            divi22.append(measure);

        }
    
        divi2.append(divi21,divi22);
        divi.append(im,title,cate,region,instructions,divi2);
        parentNode.append(divi);
     });
   

}

export {nav,getData,display,display1};