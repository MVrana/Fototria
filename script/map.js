function LoadMap(){
    var map = L.map('map').setView([49.46068, 18.13766], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    console.log("Map loaded")
}

document.onload = LoadMap()