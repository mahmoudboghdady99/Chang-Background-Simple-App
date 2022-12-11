var btn =document.querySelector(".btn")
var cont=document.querySelector("#body")

var backgrounds=
 ["-webkit-linear-gradient(left, yellow, red)", 
 "-webkit-linear-gradient(right, yellow, royalblue)", 
 "-webkit-linear-gradient(left, yellow, royalblue)", 
  "-webkit-radial-gradient(circle, yellow, red)", 
  "-webkit-radial-gradient(circle, yellow, royalblue)", 
];
var i = 0;

btn.onclick = function()
{
    cont.style.background = backgrounds[i];
    i++;
    if(i==5)
    {
        i=0;
    }
}
