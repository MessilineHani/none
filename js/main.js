let get_plan_button = document.querySelectorAll(".get-plan");
for (let i= 0; i<= get_plan_button.length; i++){
    let get_plan_button_after = window.getComputedStyle(get_plan_button[i], "::after");
    get_plan_button[i].addEventListener("mouseenter", ()=>{
        get_plan_button[i].style.setProperty("--leftposition", "0")
    })
    get_plan_button[i].addEventListener("mouseleave", ()=>{
        get_plan_button[i].style.setProperty("--leftposition","100%");
        setTimeout(() =>{
            get_plan_button[i].style.setProperty("--display","none")
            get_plan_button[i].style.setProperty("--leftposition","-100%");
        }, 100)
        setTimeout(()=>{
            get_plan_button[i].style.setProperty("--display","block")
        }, 200)
    })

}