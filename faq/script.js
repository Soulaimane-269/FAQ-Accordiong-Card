const paragraph = document.querySelectorAll(" h3~p") , h3 = document.querySelectorAll("h3") ,
imgL = document.querySelectorAll("h3 ~ span img");

console.log(imgL)
for ( i=0 ; i< h3.length; i++ ){
    let d = i;
    h3[i].addEventListener("click" , ()=>{
        h3[d].classList.toggle("heading-style");
        paragraph[d].classList.toggle("hide");
        imgL[d].classList.toggle("rotate")
    })
}