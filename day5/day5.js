
let per = document.getElementsByTagName("h2")[0];
let img = document.getElementsByTagName("img")[0];

// img.style.transition = "all ease";
// img.style.filter = "blur(0px)";
let p=0,q=1,b=33;
let percent = setInterval(()=>{
    p++;
    q=q-0.04;
    b=b-0.4;
    per.textContent = p + "%";
    per.style.opacity = q;
    img.style.filter = `blur(${b}px)`;
    if(p>=100)
        clearInterval(percent);    
},50)



