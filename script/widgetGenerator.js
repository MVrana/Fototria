const headerLinks =[
    ["Projekty", "./pages/projects.html"],
    ["Test link", "./pages/projekty.html"],
    ["Test link", "./pages/projekty.html"],
    ["Test link", "./pages/projekty.html"],
]

function LoadHeader(){
    var navBarDiv = document.getElementById("nav-bar")

    //Add logo to header
    /*var iconDiv = document.createElement("div")
    iconDiv.className = "nav-bar-logo"
    navBarDiv.appendChild(iconDiv);*/

    //Add div for links
    var linkDiv = document.createElement("div")
    linkDiv.className = "nav-bar-links"
    navBarDiv.appendChild(linkDiv);

    //Add every link in 'links'
    for(var i = 0; i < headerLinks.length; i++){
        var linkElement = document.createElement("a")
        linkElement.href = headerLinks[i][1]
        linkElement.innerHTML = headerLinks[i][0]
        //linkElement.style = "color: var({0})".replace("{0}", i%2!=0?"--fototria-orange":"--fototria-purple")
        linkDiv.appendChild(linkElement)
    }
}

function TransformNavBar(){
    var navBarDiv = document.getElementById("nav-bar")
    if (window.scrollY < 200){
        navBarDiv.style = "animation: hideNavBarBG 2s; animation-fill-mode: forwards;"
    }else{
        navBarDiv.style = "animation: showNavBarBG 2s; animation-fill-mode: forwards;"
    }
}

function LoadFooter(){
    var footerDiv = document.getElementById("footer-bar")
    // Powered by ANAFRA
    var anafraIcon = "./icon/anafraIcon.png"
    var anafraLink = "https://anafra.cz"
    var anafraText = "Powered by <a href=\""+anafraLink+"\" target=\"_blank\">ANAFRA s.r.o.</a>"
    //Copyright
    const CURRENT_YEAR = new Date().getFullYear()
    var copyrightText = "Copyright Fototria " + CURRENT_YEAR
    var footerParagraph = document.createElement("p")
    footerParagraph.innerHTML = copyrightText + ", " + anafraText;
    footerDiv.appendChild(footerParagraph)
}