# API-REST-Ecommerce

Repositorio que contiene una API REST para un sistema de ecommerce desarrollada con Node.js, Express y MongoDB usando TypeScript.

## Descripción

Esta API permite gestionar productos, usuarios y operaciones típicas de un ecommerce, como crear, leer, actualizar y eliminar productos. Está construida usando TypeScript para mayor robustez y escalabilidad, junto con MongoDB como base de datos.

## Tecnologías

* Node.js

* Express

* TypeScript

* MongoDB (Mongoose)

* Dotenv para manejo de variables de entorno

## Instalación

1. Clonar el repositorio

   ```
   git clone [https://github.com/LaloMFGM/API-REST-Ecommerce.git](https://github.com/LaloMFGM/API-REST-Ecommerce.git)
   
   ```

2. Entrar al directorio del proyecto

   ```
   cd API-REST-Ecommerce
   
   ```

3. Instalar dependencias

   ```
   npm install
   
   ```

4. Configurar variables de entorno

   Crear un archivo `.env` en la raíz con el siguiente contenido (ajusta según tu entorno):

   ```
   PORT=5000
   MONGO_URI=tu_uri_de_mongodb
   
   ```

## Uso

Para iniciar el servidor en modo desarrollo:

```
npm run dev

```

Para producción:

```
npm run build
npm start

```

La API estará disponible en: `http://localhost:<PORT>`

## Endpoints principales

### Productos

| Método | Ruta                   | Descripción               |
| ------ | ---------------------- | ------------------------- |
| GET    | `/api/products`        | Obtener todos los productos |
| GET    | `/api/products/:id`    | Obtener un producto por ID |
| POST   | `/api/products`        | Crear un nuevo producto   |
| PUT    | `/api/products/:id`    | Actualizar producto por ID |
| DELETE | `/api/products/:id`    | Eliminar producto por ID  |

(Otros endpoints pueden estar implementados según el desarrollo)

## Estructura del proyecto

* `/src` — Código fuente en TypeScript

* `/src/controllers` — Controladores con la lógica de negocio

* `/src/models` — Modelos Mongoose para la base de datos

* `/src/routes` — Definición de rutas de la API

* `/src/config` — Configuración (base de datos, variables de entorno)

* `/dist` — Código compilado listo para producción

## 🤖 Herramientas de IA utilizadas y desafíos

Durante el desarrollo de esta API, las herramientas de Inteligencia Artificial fueron esenciales para superar la falta de conocimiento en ciertas áreas y para acelerar el proceso.

### 🛠️ ¿Cómo se utilizaron las herramientas de IA?

* **Configuración de MongoDB con Mongoose:** Al no estar familiarizado con Mongoose, la IA me proporcionó ejemplos de cómo establecer la conexión a la base de datos, definir esquemas y modelos, y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera eficiente. Esto fue crucial para integrar la base de datos rápidamente.

* **Implementación de Logging con Winston:** Para la gestión de logs, la IA fue invaluable. Me ayudó a configurar Winston, incluyendo la definición de diferentes niveles de log (info, error), la configuración de transportes (consola, archivos) y la integración del logger en los controladores y middleware para registrar eventos y errores de la aplicación de manera estructurada.

* **Resolución de Errores de TypeScript y Node.js:** Frente a errores complejos relacionados con el tipado de TypeScript o problemas de ejecución en Node.js, la IA proporcionó análisis detallados y soluciones prácticas, a menudo sugiriendo correcciones en la configuración o el código que de otra manera habrían tomado mucho tiempo en depurar manualmente.

* **Optimización de Consultas y Lógica de Negocio:** Para ciertas operaciones de la API, la IA ayudó a optimizar las consultas a MongoDB y a refinar la lógica de negocio en los controladores, asegurando que las operaciones fueran más eficientes y escalables.

### 🚧 Desafíos encontrados y cómo la IA ayudó a superarlos:

* **Integración de MongoDB:** El principal desafío fue entender cómo Mongoose interactúa con MongoDB y cómo estructurar los modelos para un e-commerce. La IA desglosó este proceso, ofreciendo ejemplos claros de conexión y modelado de datos que se ajustaban a las necesidades del proyecto.

* **Manejo de Logs y Errores Centralizados:** Implementar un sistema de logging robusto que diferenciara entre varios tipos de mensajes y los almacenara adecuadamente era un reto. La IA facilitó la configuración de Winston, permitiendo un seguimiento más efectivo del comportamiento de la API y la identificación proactiva de problemas.

* **Curva de Aprendizaje de TypeScript en Backend:** Aunque TypeScript proporciona robustez, su aprendizaje en un entorno de backend con Node.js y Express presentaba sus propios desafíos. La IA fue un apoyo constante para entender los tipos de datos, interfaces y la estructura de archivos típica de un proyecto TypeScript, reduciendo la curva de aprendizaje significativamente.

En resumen, la Inteligencia Artificial fue una herramienta indispensable que me permitió abordar y superar los desafíos técnicos en este proyecto de API REST, desde la integración de la base de datos hasta la implementación de sistemas de logging, acelerando mi desarrollo y aprendizaje en el proceso.

## Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o un pull request para sugerencias o mejoras.

## Licencia

Este proyecto está bajo la licencia MIT.