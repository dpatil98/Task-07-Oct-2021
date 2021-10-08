console.log("H");

colorArr=["teal","skyblue","violet"];

document.body.style.background="palegreen";



const colorBox= document.querySelector('.color-Box');
var colNo=0;
colorBox.style.boxShadow=" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
const lftColorBox =window.setInterval( () => {

    colorBox.style.background=colorArr[colNo];
    (colNo===colorArr.length-1) ? colNo=0 : colNo++;
    

},1000*2)




const colorDivs = document.querySelectorAll('.colorB');
colorArr=["teal","skyblue","violet"];
var i=0;
var l=1;
var m=2;
var j=0;
var ji=2;
var jl=1;
var jm=0;
const cngColors = window.setInterval( () => {
        

        colorDivs[j].style.backgroundColor= colorArr[i];
        colorDivs[j+1].style.backgroundColor= colorArr[l];
        colorDivs[j+2].style.backgroundColor= colorArr[m]; 

        colorDivs[ji].style.boxShadow=" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
        colorDivs[jl].style.boxShadow=" none";
        colorDivs[jm].style.boxShadow=" none";
        
         [i,l,m]=[m,i,l]; 
         [ji,jl,jm]=[jm,ji,jl];      
     
         //colorDivs.setAttribute("style","background:green"); 
        
                

},1000*2);


document.getElementById("stop").onclick = function() {
    
    window.setTimeout( () => clearInterval(cngColors) );
    window.setTimeout( () => clearInterval(lftColorBox) );
    

};

