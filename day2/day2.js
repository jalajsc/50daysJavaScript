const activeb = document.querySelectorAll('.p');
const active = document.querySelectorAll('.l');
const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];
let a = 1;
// let b = 1;
next.addEventListener("click",function(){
        // active.forEach(act =>{
        //     act.classList.remove('activeb');
        // })
        // activeb[a].classList.add('activeb');
        // a++;
        activeb[a].classList.add('activeb');
        active[a-1].classList.add('active');
        a++;
        prev.classList.remove('n');
        prev.removeAttribute("disabled");
        if(a==4 ){
            next.classList.add('n');
            next.setAttribute("disabled",'');
        }
})
prev.addEventListener("click",function(){
    activeb[a-1].classList.remove('activeb');
    active[a-2].classList.remove('active');
    a--;
    next.classList.remove('n');
    next.removeAttribute("disabled");
    if(a==1){
        prev.classList.add('n');
        prev.setAttribute("disabled",'');
    }

})
