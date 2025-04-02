function iniciarMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.632, lng: -106.0691 }, // Chihuahua, México
        zoom: 12,
    });

    const veterinarias = [
        { 
            lat: 28.636904, lng: -106.09103, 
            name: "URUZ Clinica veterinaria", 
            address: "Av. Mirador 2704-B, Campestre-Lomas, 31205 Chihuahua, Chih." 
        },
        { 
            lat: 28.673154, lng: -106.028621, 
            name: "Dr. Kiry hospital veterinario.", 
            address: "club de Leones de Chihuahua 101, Fraccionamiento resistencial el leon, 31313 Chihuahua, Chih." 
        },
        { 
            lat: 28.635169, lng: -106.086542, 
            name: "Veterinaria Pet's Medical Center", 
            address: "C. 16 1301, Mirador, 31205 Chihuahua, Chih" 
        },
        { 
            lat: 28.632556, lng: -106.075919, 
            name: "Veterinaria Sigala ", 
            address: "Av. Melchor Ocampo 1406, Zona Centro, 31000 Chihuahua, Chih" 
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

// Función para redirigir al archivo index.html dentro de la carpeta "inicio"
function volverAlInicio() {
    window.location.href = "../inicio/index.html";
}


