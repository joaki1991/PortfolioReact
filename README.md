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
- **Animaciones**: Framer Motion - animaciones basadas en scroll
- **Iconos**: Lucide React
- **Estilos**: CSS3 con variables personalizadas y efectos neón
- **Tipografía**: Rajdhani (Google Fonts) - futurista
- **Detección de Scroll**: React Intersection Observer
- **Build Tool**: Vite para desarrollo rápido
- **SVG Animados**: Para hélice de ADN y elementos biológicos
- **Deployment**: Preparado para deployment estático

## 🧪 Componentes Principales

### DNAChain
- Hélice de ADN lateral permanente y animada
- Se construye progresivamente con el scroll
- Colores neón alternados (verde #00ffcc y magenta #ff00cc)
- Efectos 3D con rotación y parallax
- Versión optimizada para móvil

### Hero
- Sección principal con efectos de células animadas
- Call-to-actions con hover effects
- Links sociales con micro-animaciones
- Tipografía futurista Rajdhani

### About
- Información personal con iconos científicos
- Cards de habilidades con efectos hover
- Diseño modular y escalable
- Animaciones de entrada suaves

### Skills (Nuevo)
- Visualización de habilidades con tubos de ensayo animados
- Burbujas ascendentes en cada tubo
- Moléculas decorativas flotantes
- Porcentajes de dominio de tecnologías
- Efectos glassmorphism

### Experience
- Timeline interactivo de experiencia profesional
- Detalles del proyecto Pulse (MERN stack)
- Tecnologías y logros destacados
- Animaciones al scroll

### Projects
- Showcase de proyectos con glassmorphism
- Moléculas rotatorias decorativas
- Tags de tecnologías utilizadas
- Links a GitHub y demos
- Efectos neón al hover

### Contact
- Formulario funcional de contacto
- Efectos de red neuronal en el fondo
- Partículas luminosas con NeonParticleBG
- Links sociales organizados
- Efectos glow en iconos

### Componentes de Animación

#### FloatingCell
- Célula animada que se mueve con el scroll
- Núcleo pulsante y organelos flotantes
- Control de posición basado en scrollYProgress

#### Molecule
- Moléculas con órbitas y electrones
- Rotación infinita suave
- Múltiples colores neón

#### TestTube
- Tubos de ensayo con líquido coloreado
- Burbujas ascendentes animadas
- Etiquetas personalizables

#### NeonParticleBG
- Fondo de partículas bioluminiscentes
- Líneas de conexión entre partículas
- Efectos de fade in/out

## 🛠️ Instalación y Uso

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

3. **Build para producción**
   ```bash
   npm run build
   ```

## 🎨 Paleta de Colores Neón Biotecnológica

El proyecto utiliza colores neón futuristas:

- **Neon Green**: `#00ffcc` - Verde neón principal
- **Neon Magenta**: `#ff00cc` - Magenta eléctrico para contrastes
- **Neon Cyan**: `#00ffff` - Azul cian brillante
- **Background**: `#030712` - Negro azulado profundo
- **Surface**: `#0a0f1a` - Superficie elevada oscura

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
