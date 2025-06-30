# API-REST-Ecommerce

Repositorio que contiene una API REST para un sistema de ecommerce desarrollada con Node.js, Express y MongoDB usando TypeScript.

---

## Descripción

Esta API permite gestionar productos, usuarios y operaciones típicas de un ecommerce, como crear, leer, actualizar y eliminar productos. Está construida usando TypeScript para mayor robustez y escalabilidad, junto con MongoDB como base de datos.

---

## Tecnologías

- Node.js  
- Express  
- TypeScript  
- MongoDB (Mongoose)  
- Dotenv para manejo de variables de entorno  

---

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/LaloMFGM/API-REST-Ecommerce.git
```

2. Entrar al directorio del proyecto

```bash
cd API-REST-Ecommerce
```

3. Instalar dependencias

```bash
npm install
```

4. Configurar variables de entorno

Crear un archivo `.env` en la raíz con el siguiente contenido (ajusta según tu entorno):

```
PORT=5000
MONGO_URI=tu_uri_de_mongodb
```

---

## Uso

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Para producción:

```bash
npm run build
npm start
```

La API estará disponible en: `http://localhost:<PORT>`

---

## Endpoints principales

### Productos

| Método | Ruta                 | Descripción                |
| ------ | -------------------- | --------------------------|
| GET    | `/api/products`      | Obtener todos los productos|
| GET    | `/api/products/:id`  | Obtener un producto por ID |
| POST   | `/api/products`      | Crear un nuevo producto    |
| PUT    | `/api/products/:id`  | Actualizar producto por ID |
| DELETE | `/api/products/:id`  | Eliminar producto por ID   |

(Otros endpoints pueden estar implementados según el desarrollo)

---

## Estructura del proyecto

- `/src` — Código fuente en TypeScript  
- `/src/controllers` — Controladores con la lógica de negocio  
- `/src/models` — Modelos Mongoose para la base de datos  
- `/src/routes` — Definición de rutas de la API  
- `/src/config` — Configuración (base de datos, variables de entorno)  
- `/dist` — Código compilado listo para producción  

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o un pull request para sugerencias o mejoras.

---

## Licencia

Este proyecto está bajo la licencia MIT.
