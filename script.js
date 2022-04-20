
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var diva1, diva2, diva3;
div1.addEventListener('click',focus1);
div2.addEventListener('click',focus2);
div3.addEventListener('click',focus3);
var btn = document.getElementById("btn");
btn.addEventListener('click',Re);
var focused = 0;

function Re(){
focused = 0;
diva1 = new Array();
diva2 = new Array();
diva3 = new Array();
diva1.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
diva1.push("🟨🟨🟨🟨🟨🟨🟨🟨");
diva1.push("🟩🟩🟩🟩🟩🟩");
diva1.push("🟦🟦🟦🟦");
diva1.push("🟪🟪🟪");
diva1.push("⬛️");
update();
}

function focus1(){
if(focused == 0){
    div1.id = "focus";
    focused = 1;
}else{
    if(focused == 2){
      diva1.push(diva2.pop());
    }
    else if(focused == 3){
      diva1.push(diva3.pop());
    }
    update();
}
}
function focus2(){
if(focused == 0){
    div2.id = "focus";
    focused = 2;
}else{
    if(focused == 1){
       diva2.push(diva1.pop());
    }
    else if(focused == 3){
      diva2.push(diva3.pop());
    }
    update();
}
}
function focus3(){
if(focused == 0){
    div3.id = "focus";
    focused = 3;
}else{
    if(focused == 2){
      diva3.push(diva2.pop());
    }
    else if(focused == 1){
      diva3.push(diva1.pop());
    }
    update();
}
}

function update(){
div1.id = "div1";
div2.id = "div2";
div3.id = "div3";
focused = 0;

for(let i = 0; i < diva1.length; i++) {
    if(diva1[i] === undefined)  {
        diva1.splice(i, 1);
        i--;
    }
    }
for(let i = 0; i < diva2.length; i++) {
    if(diva2[i] === undefined)  {
        diva2.splice(i, 1);
        i--;
    }
}
for(let i = 0; i < diva3.length; i++) {
    if(diva3[i] === undefined)  {
        diva3.splice(i, 1);
        i--;
    }
}

div1.innerHTML = diva1.join("<br>");
div2.innerHTML = diva2.join("<br>");
div3.innerHTML = diva3.join("<br>");

if(diva1[0] == null || undefined){
    div1.innerHTML = "first";
}
if(diva2[0] == null || undefined){
    div2.innerHTML = "second";
}
if(diva3[0] == null || undefined){
    div3.innerHTML = "third";
}

}

window.onload = Re;