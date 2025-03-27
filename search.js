async function searchPets() {
  const breed = document.getElementById('breed-search').value;
  if (!breed) {
    alert("Por favor, ingrese una raza para buscar.");
    return;
  }

  try {
    // URL para obtener la lista de razas de perros desde la API de Dog CEO
    const apiUrl = `https://dog.ceo/api/breeds/list/all`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "success") {
      const breeds = Object.keys(data.message); // Lista de razas

      // Comprobar si la raza ingresada está en la lista de razas
      if (breeds.includes(breed.toLowerCase())) {
        alert(`¡Raza encontrada! ${breed}`);
      } else {
        alert(`No se encontró la raza: ${breed}`);
      }
    } else {
      alert("Hubo un error al obtener las razas de perros.");
    }
  } catch (error) {
    console.error("Error al buscar razas de perros:", error);
    alert("Hubo un error al buscar las razas de perros.");
  }
}
