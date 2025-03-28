async function searchPets() {
  const breed = document.getElementById('breed-search').value.toLowerCase();
  if (!breed) {
    alert("Por favor, ingrese una raza para buscar.");
    return;
  }

  const breedImages = {
    "affenpinscher": "https://dog.ceo/api/breed/affenpinscher/images/random",
    "african": "https://dog.ceo/api/breed/African/images/random",
    "airedale": "https://dog.ceo/api/breed/airedale/images/random",
    "akita": "https://dog.ceo/api/breed/akita/images/random",
    "appenzeller": "https://dog.ceo/api/breed/appenzeller/images/random",
    "australian": "https://dog.ceo/api/breed/kelpie australian/images/random",
    "beagle": "https://dog.ceo/api/breed/beagle/images/random",
    "bluetick": "https://dog.ceo/api/breed/bluetick/images/random",
    "boxer": "https://dog.ceo/api/breed/boxer/images/random",
    "brabancon": "https://dog.ceo/api/breed/brabancon/images/random",
    "briard": "https://dog.ceo/api/breed/briard/images/random",
    "norwegian": "https://dog.ceo/api/breed/norwegian buhund/images/random",
    "boston": "https://dog.ceo/api/breed/boston bulldog/images/random",
    "english bulldog": "https://dog.ceo/api/breed/english bulldog/images/random",
    "french bulldog": "https://dog.ceo/api/breed/french bulldog/images/random",
    "staffordshire": "https://dog.ceo/api/breed/staffordshire bullterrier/images/random",
    "australian cattledog": "https://dog.ceo/api/breed/australian cattledog/images/random",
    "cavapoo": "https://dog.ceo/api/breed/cavapoo/images/random",
    "chihuahua": "https://dog.ceo/api/breed/chihuahua/images/random",
    "indian chippiparai": "https://dog.ceo/api/breed/indian chippiparai/images/random",
    "chow": "https://dog.ceo/api/breed/chow/images/random",
    "clumber": "https://dog.ceo/api/breed/clumber/images/random",
    "cockapoo": "https://dog.ceo/api/breed/cockapoo/images/random",
    "border collie": "https://dog.ceo/api/breed/border collie/images/random",
    "coonhound": "https://dog.ceo/api/breed/coonhound/images/random",
    "corgi": "https://dog.ceo/api/breed/cardigan corgi/images/random",
    "cotondetulear": "https://dog.ceo/api/breed/cotondetulear/images/random",
    "dachshund": "https://dog.ceo/api/breed/dachshund/images/random",
    "dalmatian": "https://dog.ceo/api/breed/dalmatian/images/random",
    "great dane": "https://dog.ceo/api/breed/great dane/images/random",
    "swedish danish": "https://dog.ceo/api/breed/swedish danish/images/random",
    "scottish deerhound": "https://dog.ceo/api/breed/scottish deerhound/images/random",
    "dhole": "https://dog.ceo/api/breed/dhole/images/random",
    "dingo": "https://dog.ceo/api/breed/dingo/images/random",
    "doberman": "https://dog.ceo/api/breed/doberman/images/random",
    "norwegian elkhound": "https://dog.ceo/api/breed/norwegian elkhound/images/random",
    "entlebucher": "https://dog.ceo/api/breed/entlebucher/images/random",
    "eskimo": "https://dog.ceo/api/breed/eskimo/images/random",
    "lapphund finnish": "https://dog.ceo/api/breed/lapphund finnish /images/random",
    "bichon frise": "https://dog.ceo/api/breed/bichon frise/images/random",
    "indian gaddi": "https://dog.ceo/api/breed/indian gaddi/images/random",
    "germanshepherd": "https://dog.ceo/api/breed/germanshepherd/images/random",
    "indian greyhound": "https://dog.ceo/api/breed/indian greyhound/images/random",
    "italian greyhound": "https://dog.ceo/api/breed/italian greyhound/images/random",
    "groenendael": "https://dog.ceo/api/breed/groenendael/images/random",
    "havanese": "https://dog.ceo/api/breed/havanese/images/random",
    "afghan hound": "https://dog.ceo/api/breed/afghan hound/images/random",
    "basset hound": "https://dog.ceo/api/breed/basset hound/images/random",
    "blood hound": "https://dog.ceo/api/breed/blood hound/images/random",
    "english hound": "https://dog.ceo/api/breed/english hound/images/random",
    "ibizan hound": "https://dog.ceo/api/breed/ibizan hound/images/random",
    "plott hound": "https://dog.ceo/api/breed/plott hound/images/random",
    "walker hound": "https://dog.ceo/api/breed/walker hound/images/random",
    "husky": "https://dog.ceo/api/breed/husky/images/random",
    "keeshond": "https://dog.ceo/api/breed/keeshond/images/random",
    "kelpie": "https://dog.ceo/api/breed/kelpie/images/random",
    "kombai": "https://dog.ceo/api/breed/kombai/images/random",
    "komondor": "https://dog.ceo/api/breed/komondor/images/random",
    "kuvasz": "https://dog.ceo/api/breed/kuvasz/images/random",
    "labradoodle": "https://dog.ceo/api/breed/labradoodle/images/random",
    "labrador": "https://dog.ceo/api/breed/labrador/images/random",
    "leonberg": "https://dog.ceo/api/breed/leonberg/images/random",
    "lhasa": "https://dog.ceo/api/breed/lhasa/images/random",
    "malamute": "https://dog.ceo/api/breed/malamute/images/random",
    "malinois": "https://dog.ceo/api/breed/malinois/images/random",
    "maltese": "https://dog.ceo/api/breed/maltese/images/random",
    "bull mastiff": "https://dog.ceo/api/breed/bull mastiff/images/random",
    "english mastiff": "https://dog.ceo/api/breed/english mastiff/images/random",
    "indian mastiff": "https://dog.ceo/api/breed/indian mastiff/images/random",
    "tibetan mastiff": "https://dog.ceo/api/breed/tibetan mastiff/images/random",
    "mexicanhairless": "https://dog.ceo/api/breed/mexicanhairless/images/random",
    "mix": "https://dog.ceo/api/breed/mix/images/random",
    "bernese mountain": "https://dog.ceo/api/breed/bernese mountain/images/random"
  };

  if (!(breed in breedImages)) {
    alert(`No se encontró la raza: ${breed}`);
    return;
  }

  try {
    const imageUrl = breedImages[breed];
    const imageResponse = await fetch(imageUrl);
    const imageData = await imageResponse.json();

    if (imageData.status === "success" && imageData.message) {
      const image = imageData.message;
      document.getElementById('search-results').innerHTML = `<p>¡Raza encontrada! ${breed}</p>`;
      document.getElementById('breed-image').innerHTML = `<img src="${image}" alt="${breed}" style="max-width: 100%; height: auto;">`;
    } else {
      document.getElementById('breed-image').innerHTML = `<p>No se pudo obtener la imagen para la raza ${breed}.</p>`;
    }
  } catch (error) {
    console.error("Error al buscar la imagen del perro:", error);
    alert("Hubo un error al obtener la imagen de la raza.");
  }
}
