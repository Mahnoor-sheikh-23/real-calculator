let input = document.querySelector("input");
let buttons = document.querySelectorAll(".buttn");
let results = "";
let array = Array.from(buttons)
array.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            results = eval(results)
            input.value = results
        } else if(e.target.innerHTML == "AC"){
            results = ""
            input.value = results
        }else if(e.target.innerHTML == "DEL"){
            results = results.substring(0,results.length-1);
            input.value = results
        }
        else{
        results += e.target.innerHTML;
        input.value = results;
        }
    })
})










