/* Header */

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

let navBar = document.querySelectorAll(".navlink");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click" , function(){
        navCollapse.classList.remove("show");
    })
})

      const scriptURL = 'https://script.google.com/macros/s/AKfycbyOurU-vR3gjFTwiNBxaPsNrs_uvIbd61_VdfyMOrGlhSJqg856MNPGAJPoab0u_DqP/exec'
      const form = document.forms['submit-to-google-sheet']

      const msg = document.getElementById("msg")
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML =  "Message sent successfully"
         setTimeout(function(){
            msg.innerHTML = ""
         }, 5000)
         form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })