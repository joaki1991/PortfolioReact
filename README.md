# Portfolio React - Temática Biológica

Un portfolio personal desarrollado en React con una temática única inspirada en la biología, featuring animaciones fluidas y efectos visuales orgánicos.

## 🧬 Características

- **Temática Biológica**: Diseño inspirado en elementos naturales como ADN, células y redes neuronales
- **Animaciones Fluidas**: Implementadas con Framer Motion para transiciones suaves durante el scroll
- **Responsive Design**: Optimizado para todos los dispositivos y tamaños de pantalla
- **Experiencia Moderna**: Showcase de habilidades en React, Node.js, MongoDB y más
- **Efectos Visuales**: Partículas flotantes, animaciones de doble hélice y elementos orgánicos

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 19+ con Vite
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Estilos**: CSS3 con variables personalizadas
- **Build Tool**: Vite para desarrollo rápido
- **Deployment**: Preparado para deployment estático

## 🧪 Componentes Principales

### DNAAnimation
- Animación de doble hélice de ADN en el fondo
- Partículas flotantes con movimiento orgánico
- Rotación continua y efectos de opacidad

### Hero
- Sección principal con efectos de células animadas
- Call-to-actions con hover effects
- Links sociales con micro-animaciones

### About
- Información personal con iconos científicos
- Cards de habilidades con efectos hover
- Diseño modular y escalable

### Experience
- Timeline interactivo de experiencia profesional
- Detalles del proyecto Pulse (MERN stack)
- Tecnologías y logros destacados

### Projects
- Showcase de proyectos con placeholders visuales
- Tags de tecnologías utilizadas
- Links a GitHub y demos

### Contact
- Formulario funcional de contacto
- Efectos de red neuronal en el fondo
- Links sociales organizados

## 🛠️ Instalación y Uso

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno**
   
   Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
   
   Luego edita `.env` y añade tu Access Key de Web3Forms:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=tu-access-key-aqui
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Build para producción**
   ```bash
   npm run build
   ```

## 🚀 Despliegue en Netlify

Para desplegar este portfolio en Netlify y que el formulario de contacto funcione correctamente, sigue la guía detallada en [NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md).

**Resumen rápido:**

1. Configura la variable de entorno `VITE_WEB3FORMS_ACCESS_KEY` en Netlify
2. El archivo `netlify.toml` ya está configurado con los ajustes necesarios
3. Trigger un nuevo deploy después de configurar la variable
4. ¡El formulario de contacto funcionará automáticamente!

Ver la [guía completa](./NETLIFY_DEPLOYMENT_GUIDE.md) para instrucciones paso a paso.

## 🎨 Paleta de Colores

El proyecto utiliza una paleta inspirada en la naturaleza:

- **Primary Green**: `#2d5a3d` - Verde bosque profundo
- **Accent Green**: `#76b583` - Verde vibrante para highlights
- **Primary Blue**: `#2c5f7e` - Azul océano para contrastes
- **Background**: `#0f1419` - Negro profundo para el fondo
- **Surface**: `#1a2332` - Gris azulado para superficies

## 🧬 Características Específicas

### Animaciones de Scroll
- Elementos aparecen suavemente al hacer scroll
- Utiliza Intersection Observer para optimizar rendimiento
- Staggered animations para efectos secuenciales

### Temática Biológica
- Iconos relacionados con ciencia y biología
- Patrones orgánicos y formas naturales
- Gradientes que evocan elementos naturales

### Optimización
- Componentes optimizados con React.memo donde es necesario
- Lazy loading de imágenes y efectos
- CSS optimizado para performance

## 📱 Responsividad

- **Desktop**: Diseño completo con todas las animaciones
- **Tablet**: Layouts adaptados manteniendo funcionalidad
- **Mobile**: Diseño mobile-first con navegación optimizada

## 🔧 Personalización

Para personalizar el portfolio:

1. **Información Personal**: Edita los datos en cada componente
2. **Proyectos**: Actualiza el array de proyectos en `Projects.jsx`
3. **Experiencia**: Modifica el timeline en `Experience.jsx`
4. **Colores**: Ajusta las variables CSS en `App.css`
5. **Animaciones**: Personaliza las transiciones en cada componente

## 📦 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🌟 Próximas Funcionalidades

- [ ] Modo oscuro/claro toggle
- [ ] Más animaciones interactivas
- [ ] Blog integrado
- [ ] CMS para gestión de contenido
- [ ] Optimizaciones SEO adicionales

---

**Desarrollado con ❤️ por Joaquín**

Portfolio que demuestra experiencia en React, Node.js, MongoDB y diseño modern web development.
