let button1 = document.querySelector("#price__button_1");
let button2 = document.querySelector("#price__button_2");


let content1 = document.querySelector("#price_1");
let content2 = document.querySelector("#price_2");


button1.onclick = function (){
    button1.classList.add("price__button_active");
    button2.classList.remove("price__button_active");
    content2.classList.add("price__content_OFF");
    content1.classList.remove("price__content_OFF");
}
button2.onclick = function (){
    button1.classList.remove("price__button_active");
    button2.classList.add("price__button_active");
    content2.classList.remove("price__content_OFF");
    content1.classList.add("price__content_OFF");
}

