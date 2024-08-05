var Menu_itens = document.getElementById("Menu_itens");

Menu_itens.style.maxHeight = "0px";

function menucelular(){
    if(Menu_itens.style.maxHeight == "0px"){
        Menu_itens.style.maxHeight = "250px";
    }else{
        Menu_itens.style.maxHeight = "0px";

    }
}

