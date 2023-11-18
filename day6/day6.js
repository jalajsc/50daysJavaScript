let content = document.querySelectorAll(".content");


window.addEventListener('scroll' , ()=>{
    let Wsize = window.innerHeight/4*3;

    content.forEach(element => {
        let top = element.getBoundingClientRect().top;
        if(top<Wsize)
            element.classList.add("show");
        else    
            element.classList.remove("show");
    })    
});