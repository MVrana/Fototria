//Animovaná hlavička
window.addEventListener('scroll', function(event) {
    const navBar = this.document.getElementById("nav-bar")
    if (window.scrollY > 1){
        navBar.classList.remove("headerBig")
        navBar.classList.add("headerSmall")
    }else{
        navBar.classList.remove("headerSmall")
        navBar.classList.add("headerBig")
    }
});

function LoadPageIcon(){
    link = document.createElement("link")
    link.href = "../icon/favicon.png"
    link.rel = "icon"
    document.getElementsByTagName('head')[0].appendChild(link)
}

window.onload = (event) =>{
    
}