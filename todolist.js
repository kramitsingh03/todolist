let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
button.addEventListener("click",function (){
let item = document.createElement("li");
item.innerText = input.value;

let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value = "";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement; //target is used to target the particular element
    listItem.remove();  // remove() is a function to remove a particular element
    }
});