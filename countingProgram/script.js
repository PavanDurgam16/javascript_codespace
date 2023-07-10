
let labelText = document.getElementById("myLabel");
let count = 0;

document.getElementById("decBtn").onclick=function(){
  count -= 1;
  labelText.innerHTML=count;
  labelText.style.color= "red";
}
document.getElementById("resetBtn").onclick=function(){
  count = 0;
  labelText.innerHTML=count;
  labelText.style.color= "Black";
}
document.getElementById("incBtn").onclick=function(){
  count += 1;
  labelText.innerHTML=count;
  labelText.style.color= "green";
}