// Načítání souborů
function LoadFile(path){
    fetch(path)
        .then((res) => res.text())
        .then((text) => {
          console.log(text)
         })
        .catch((e) => console.error(e));
}

window.onload = (event) =>{
    //LoadFile("")
}