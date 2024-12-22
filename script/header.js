const links =[
    ["Projekty", "/pages/projekty.html"]
]

function LoadHeader(){
    var navBarDiv = document.getElementById("nav-bar")

    //Add logo to header
    var iconDiv = document.createElement("div")
    iconDiv.className = "header-logo"
    navBarDiv.appendChild(iconDiv)

    //Add div for links
    var linkDiv = document.createElement("div")
    linkDiv.className = "header-links"
    navBarDiv.appendChild(linkDiv)

    //Add every link in 'links'
    links.forEach(link => {
        var linkElement = document.createElement("a")
        linkElement.href = link[1]
        linkElement.innerHTML = link[0]
        linkDiv.appendChild(linkElement)
    });
}

window.onload = (event) =>{
    LoadHeader()
}