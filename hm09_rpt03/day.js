var p;
function init(){
    p = document.getElementById("p");
    p.onmouseover=over;
    p.onmouseout=out;
}
function over(){
    p.style.backgroundColor="#ffc5dc";
}
function out(){
    p.style.backgroundColor="";
}
