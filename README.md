# E-commerce Mueblería Hermanos Jota
**Sprint 3 y 4 - NEXUS**

## Resumen del Proyecto

Aplicación de e-commerce completa que transforma una maqueta visual en una verdadera aplicación cliente-servidor. El frontend de React se comunica con una API REST construida con Node.js y Express para obtener y mostrar datos de productos dinámicamente.

## Integrantes del Proyecto

- **María Luz Lema** (@Majijo) - Backend & API REST
- **Cassiel Maximiliano Lucero** (@cassiel2002) - Frontend & Diseño UX/UI

## Arquitectura del Proyecto

Monorepo con dos aplicaciones principales:

```
/
├── backend/          # API REST con Node.js y Express
│   ├── controllers/  # Controladores de la API
│   ├── data/         # Datos de productos (array local)
│   ├── middlewares/  # Middlewares personalizados
│   ├── routes/       # Definición de rutas con express.Router
│   └── index.js      # Servidor principal
├── front/            # SPA con React + Vite
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── utils/       # Configuraciones de animaciones
│   │   └── App.jsx      # Componente principal
└── README.md
```

## Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm

### Instalación Rápida
```bash
# Instalar dependencias de ambos proyectos
npm run install:all
```

### Instalación Manual
```bash
# Backend
cd backend
npm install

# Frontend  
cd front
npm install
```

### Ejecución (2 terminales necesarias)

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Servidor disponible en `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd front
npm run dev
```
Aplicación disponible en `http://localhost:5173`

### Orden de Ejecución
1. Iniciar backend (puerto 3000)
2. Iniciar frontend (puerto 5173)
3. Acceder a `http://localhost:5173`

## Funcionalidades Implementadas

### Backend (API con Express)
✅ **Servidor Express** con API REST básica  
✅ **Fuente de datos**: Array de productos en archivo .js local  
✅ **Endpoints implementados**:
- `GET /api/productos` - Listado completo de productos
- `GET /api/productos/:id` - Producto específico por ID (404 si no existe)

✅ **Middleware**:
- Logger personalizado (console.log de método y URL)
- express.json() para futuras peticiones POST

✅ **Organización**:
- Rutas organizadas con express.Router
- Manejador de rutas no encontradas (404)
- Manejador de errores centralizado

### Frontend (SPA con React)
✅ **Arquitectura de componentes**:
- `<Navbar>`, `<Footer>`, `<ProductCard>`, `<ProductList>`, `<ProductDetail>`, `<ContactForm>`

✅ **Página de catálogo**:
- Petición fetch a `GET /api/productos` al cargar
- Estados de "Cargando..." y "Error al cargar productos"
- Renderizado con .map() y keys correctas
- Componente `<ProductCard>` por cada producto

✅ **Vista de detalle**:
- Renderizado condicional (sin React Router)
- Cambio de estado en App.js al hacer clic en ProductCard
- Navegación entre lista y detalle

✅ **Carrito de compras**:
- Botón "Añadir al Carrito" en ProductDetail
- Estado del carrito (array) en App.js
- Contador de ítems en Navbar actualizado dinámicamente

✅ **Formulario de contacto**:
- Componente controlado con useState
- Valores de inputs atados a estado
- console.log del estado al enviar
- Mensaje de éxito en UI

## Tecnologías Utilizadas

### Backend
- Node.js + Express.js
- CORS para comunicación con frontend
- dotenv para variables de entorno

### Frontend
- React 18 con hooks (useState)
- Vite como bundler
- Framer Motion para animaciones elegantes
- CSS personalizado (sin frameworks)

## Decisiones de Arquitectura

### Backend
- **CommonJS**: Simplicidad y compatibilidad
- **Datos locales**: Array en archivo .js (sin base de datos)
- **Middleware personalizado**: Logger propio en lugar de librerías externas
- **Estructura modular**: Separación clara de responsabilidades

### Frontend
- **Estado local**: useState sin librerías adicionales (Redux)
- **Renderizado condicional**: Navegación simple sin React Router
- **Comunicación con API**: Fetch nativo con manejo de ciclo de vida
- **Componentes reutilizables**: Arquitectura escalable y mantenible

### Animaciones
- **Framer Motion**: Transiciones elegantes y fluidas
- **Principios**: Moderación, coherencia y elegancia
- **Configuración centralizada**: `animations.js` para consistencia
- **Tipos**: Fade, slide, scale, stagger y micro-interacciones

## Cumplimiento de Objetivos de Aprendizaje

✅ Construir servidor web y API REST con Node.js y Express  
✅ Organizar rutas de API con express.Router  
✅ Implementar middlewares personalizados  
✅ Reconstruir UI con arquitectura de componentes React  
✅ Manejar estado con useState  
✅ Pasar datos entre componentes con props  
✅ Manejar interacción del usuario con eventos React  
✅ Renderizar listas dinámicamente con .map() y keys  
✅ Implementar renderizado condicional  
✅ Conectar React a API backend con fetch  
✅ Manejar ciclo de vida de peticiones (carga, éxito, error)