var header_chnage_1= document.getElementById("touch1");
var header_chnage_2= document.getElementById("touch2");
var block=document.getElementById("block");
var test=true;
function chng_i1(e){

        block.style.display="block";
        block.style.zIndex="111";
        test=false;    
}

function chng_i2(e){
    block.style.display="none";
}


header_chnage_1.addEventListener("click",chng_i1);
header_chnage_2.addEventListener("click",chng_i2);