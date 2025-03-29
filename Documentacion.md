Las principales características de PetCare son:
Búsqueda de veterinarias.
Visualización de veterinarias en un mapa interactivo.
Chatbot para resolver dudas básicas sobre mascotas.

📋 Requisitos y Estructura del Proyecto
Requisitos
Navegador web moderno ( Microsoft Edge)
Conexión a Internet

Estructura del Proyecto
python
Copy
Edit
petcare/
├── chatbot/
│   ├── chatbot.html        # Interfaz del chatbot
│   └── chatbot.css         # Estilos del chatbot
├── inicio/
│   ├── index.html          # Página principal
│   ├── app.js              # Lógica de navegación y eventos
│   ├── search.js           # Función de búsqueda de veterinarias
│   ├── config.js           # Configuración global
│   └── style.css           # Estilos generales
├── maps/
│   ├── veterinarios.html   # Mapa de veterinarias
│   ├── maps.js             # Script para funcionamiento de mapas
│   └── map.css             # Estilos del mapa
└── Documentacion.md        # Documentación del proyecto
👤 Manual de Usuario
Inicio
Abre el archivo inicio/index.html en tu navegador.
Desde esta página puedes:
Buscar veterinarias cercanas.

Acceder al mapa.
Mapa de Veterinarias
Abre maps/veterinarios.html.
Se desplegará un mapa interactivo donde podrás localizar veterinarias.

Chatbot
Abre chatbot/chatbot.html.
Utiliza el cuadro de chat para escribir dudas comunes sobre el cuidado de mascotas.
Recibe respuestas automáticas del asistente virtual.

