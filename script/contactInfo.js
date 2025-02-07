const CONTACTS = {
    "empty":{
        "name":"",
        "desc":"",
        "img":"./icon/emptyContact.svg",
    },
    "martin-vrana":{
        "name":"Martin Vrána",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo neque tenetur quia aliquid laborum eius! Corporis error illo commodi porro adipisci, vero est modi quas repellendus, dolorum fugit ea necessitatibus.",
        "img":"./icon/emptyContact.svg",
    },
    "vojtech-prstek":{
        "name":"Vojtěch Prstek",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo neque tenetur quia aliquid laborum eius! Corporis error illo commodi porro adipisci, vero est modi quas repellendus, dolorum fugit ea necessitatibus.",
        "img":"./icon/emptyContact.svg",
    },
    "stepan-adamek":{
        "name":"Štěpán Adámek",
        "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo neque tenetur quia aliquid laborum eius! Corporis error illo commodi porro adipisci, vero est modi quas repellendus, dolorum fugit ea necessitatibus.",
        "img":"./icon/emptyContact.svg",
    },
}
function GenerateContactCard(contactCard){
    var contactID = contactCard.getAttribute("contact")
    if (!Object.keys(CONTACTS).includes(contactID)){
        contactCard.setAttribute("contact", "empty")
        GenerateContactCard(contactCard)
        //Generuje prázdný
    }else {
        contactCard.style = "background-image: url("+ CONTACTS[contactID].img +");"
        var contactInfoDiv = document.createElement("div")
        contactInfoDiv.setAttribute("class", "contact-info")

        var contactHeader = document.createElement("h3")
        contactHeader.innerText = CONTACTS[contactID].name

        var contactDesc = document.createElement("p")
        contactDesc.innerText = CONTACTS[contactID].desc

        contactInfoDiv.appendChild(contactHeader)
        contactInfoDiv.appendChild(contactDesc)
        contactCard.appendChild(contactInfoDiv)
    }
}
function FillContactCards(){
    //Get all contact cards
    var allDiv = document.getElementsByTagName("div")
    Array.from(allDiv).forEach(element => {
        if(element.getAttribute("contact")){
            GenerateContactCard(element)
        }
    });
}