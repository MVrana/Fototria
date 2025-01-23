function LoadPageIcon(){
    link = document.createElement("link")
    link.href = "./icon/favicon.png"
    link.rel = "icon"
    document.getElementsByTagName('head')[0].appendChild(link)
}
 
window.onscroll = () =>{
    TransformNavBar()
}

window.onload = (event) =>{
    LoadPageIcon()
    TransformNavBar()
    LoadHeader()
    FillContactCards()
}