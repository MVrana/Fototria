// Načítání souborů
function LoadFile(path){
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
          console.log(text)
         })
        .catch((e) => console.error(e));
}

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

window.onload = (event) =>{
    //LoadFile("")
}