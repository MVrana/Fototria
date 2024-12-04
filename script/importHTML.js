export function LoadFile(path){
    fetch("../header.html")
        .then((res) => res.text())
        .then((text) => {
          console.log(text)
         })
        .catch((e) => console.error(e));
}