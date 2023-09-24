const active = document.querySelectorAll('.img');
active.forEach(act=>{
act.addEventListener("click",function(){
    active.forEach(acts => {
        acts.classList.remove('active');
    });
    act.classList.add('active');
})
})