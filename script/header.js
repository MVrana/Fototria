const links =[
    ["Projekty", "./pages/projekty.html"],
    ["Test link", "./pages/projekty.html"],
    ["Test link", "./pages/projekty.html"],
    ["Test link", "./pages/projekty.html"],
]

function LoadHeader(){
    var navBarDiv = document.getElementById("nav-bar")

    //Add logo to header
    var iconDiv = document.createElement("div")
    iconDiv.className = "nav-bar-logo"
    navBarDiv.appendChild(iconDiv);

    //Add div for links
    var linkDiv = document.createElement("div")
    linkDiv.className = "nav-bar-links"
    navBarDiv.appendChild(linkDiv);

    //Add every link in 'links'
    for(var i = 0; i < links.length; i++){
        var linkElement = document.createElement("a")
        linkElement.href = links[i][1]
        linkElement.innerHTML = links[i][0]
        linkElement.style = "color: var({0})".replace("{0}", i%2!=0?"--fototria-orange":"--fototria-purple")
        linkDiv.appendChild(linkElement)
    }
    /* Stará verze, nemá index pro střídání barev
    links.forEach(link => {
        var linkElement = document.createElement("a")
        linkElement.href = link[1]
        linkElement.innerHTML = link[0]
        linkDiv.appendChild(linkElement)
    });
    */
}

function TransformNavBar(){
    console.log(document.body.scrollTop)
    var navBarDiv = document.getElementById("nav-bar")
    var titleDiv = document.getElementById("title-background")

    if (window.scrollY == 0){
        navBarDiv.style = "animation: hideNavBar 1s; animation-fill-mode: forwards;"
    }else{
        navBarDiv.style = "animation: showNavBar 1s; animation-fill-mode: forwards;"
    }
}