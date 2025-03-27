function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.632, lng: -106.0691 }, // Chihuahua, México
        zoom: 12,
    });

    const veterinarias = [
        { 
            lat: 28.6354, lng: -106.0843, 
            name: "Hospital Veterinario del Valle", 
            address: "Av. Homero 2311, Col. Valle Verde, Chihuahua, Chih." 
        },
        { 
            lat: 28.6275, lng: -106.0762, 
            name: "Clínica Veterinaria Chihuahua", 
            address: "Calle 24ª 2201, Col. Santo Niño, Chihuahua, Chih." 
        },
        { 
            lat: 28.6432, lng: -106.0795, 
            name: "VetMédica", 
            address: "Av. Teófilo Borunda 1301, Col. San Felipe, Chihuahua, Chih." 
        },
        { 
            lat: 28.6518, lng: -106.0994, 
            name: "Centro Veterinario Can Cat", 
            address: "Av. Tecnológico 3800, Col. Nombre de Dios, Chihuahua, Chih." 
        },
    ];

    veterinarias.forEach((veterinaria) => {
        const marker = new google.maps.Marker({
            position: { lat: veterinaria.lat, lng: veterinaria.lng },
            map: map,
            title: veterinaria.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${veterinaria.name}</strong><br>📍 ${veterinaria.address}`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
