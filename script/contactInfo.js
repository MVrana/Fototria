const CONTACTS = {
    "empty":{
        "name":"",
        "desc":"",
        "img":"./icon/favicon.png",
    },
    "martin-vrana":{
        "name":"Martin Vrána",
        "desc":"",
        "img":"./icon/logoFototria.png",
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