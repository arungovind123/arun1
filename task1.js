var a=document.querySelector("main")
var e=document.querySelector("#btm")
var z=a.children


e.addEventListener("click",function)(){
    console.log("list tag length",z.length+1);
    a.style.background="yellow"
    a.style.width="250px"
    a.style.height="250px"
    a.style.borderRadius="20px"
    var b=document.createElement("li")
    a.appendChild(b)
    var total=z.length

    if(total==5){
        b.style.background="red"

    }
    b.innerText="list"+total
    b.classList.add("listtag")

}