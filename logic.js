let btns = document.querySelectorAll(".btns");
let evalarea = document.querySelector("input");
let ans = document.getElementById("evaluate");
let str = "";
Array.from(btns).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.currentTarget.innerHTML == '='){
            str = eval(str);
            evalarea.value = str;
        }
        else if(e.currentTarget.innerHTML == "C"){
            str = "";
            evalarea.value = str;
        }
        else{
            str+=e.currentTarget.innerHTML;
            evalarea.value = str;
        }
    })
})

