let but = document.getElementsByTagName("button")[0];
let inp = document.getElementsByTagName("input")[0];
but.addEventListener("click", function(){
        if(inp.style.width != "0px")
            inp.style.width = "0px";
        else
            inp.style.width = "180px";
})
