// URL de la API de Geminis AI (ajústalo según la documentación de Geminis AI)
const apiUrl = 'https://api.geminis.ai/endpoint'; 

// Tu clave API (reemplázala por la tuya)
const apiKey = 'TU_CLAVE_API_AQUI';

// Obtener el formulario y el área de respuesta
const form = document.getElementById('ai-form');
const responseArea = document.getElementById('response');

// Manejar el evento de envío del formulario
form.addEventListener('submit', async function(event) {
    event.preventDefault();  // Evita que se recargue la página

    // Obtener el valor del campo de texto
    const inputText = document.getElementById('inputText').value;

    // Configurar la solicitud HTTP
    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            text: inputText  // Ajusta el cuerpo según la API
        })
    };

    try {
        // Realizar la solicitud a la API
        const response = await fetch(apiUrl, requestData);
        const data = await response.json();

        // Mostrar la respuesta de la API en el área de resultados
        responseArea.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        responseArea.textContent = 'Hubo un error al procesar la solicitud.';
    }
});
