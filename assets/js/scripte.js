let menu = document.getElementById("menuBurger");
let ul = document.getElementById("ulMobile");

menu.addEventListener("click",function(){
    menu.classList.toggle("click");
    ul.classList.toggle("d-block");
    ul.classList.toggle('show');
    
});