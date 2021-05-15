function initMap() {
    // The location of Uluru
    const uluru = { lat: 46.482525, lng: 30.723309 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById("map"), { zoom: 13, center: uluru });
    // The marker, positioned at Uluru

    const icon = "./images/map/marker.png"
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: icon,
    });

}