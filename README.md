# HealthTech Perú - Landing Page

Landing page moderna y funcional desarrollada con **TypeScript** y **React** para el ecosistema de tecnología aplicada a la salud en Perú.

> Proyecto desarrollado como parte de las prácticas preprofesionales en DISTRIBUIDORA SENTRO S.A.C.

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Arquitectura de Componentes](#arquitectura-de-componentes)
- [Integración con APIs](#integración-con-apis)
- [Diseño Responsivo](#diseño-responsivo)
- [Contribución](#contribución)

---

## 🎯 Acerca del Proyecto

HealthTech Perú es una plataforma web diseñada para articular y promover el ecosistema de tecnología en salud en Perú. Similar a como FinTech Perú agrupa al sector fintech nacional, esta plataforma conecta:

- **Startups** de salud digital
- **Instituciones médicas** innovadoras
- **Inversionistas** especializados en HealthTech
- **Reguladores** del sector salud
- **Profesionales** interesados en transformación digital sanitaria

### Objetivo

Crear un punto de encuentro digital que facilite el networking, visibilidad y crecimiento del sector HealthTech peruano.

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Directorio de Empresas HealthTech**: Catálogo completo con más de 50 empresas clasificadas por categorías
- ✅ **Sistema de Filtrado Avanzado**: Búsqueda multidimensional por categoría, etapa de desarrollo, ubicación y modelo de negocio
- ✅ **Gestión de Eventos**: Calendario de conferencias, webinars y meetups del ecosistema
- ✅ **Blog de Innovación**: Artículos sobre tendencias en salud digital
- ✅ **Formulario de Afiliación**: Sistema para que nuevas empresas se unan al ecosistema
- ✅ **Diseño Responsivo**: Experiencia óptima en móviles, tablets y desktop
- ✅ **Accesibilidad WCAG 2.1**: Navegación por teclado, etiquetas ARIA, contraste adecuado

### Categorías del Ecosistema

1. **Telemedicina y Consulta Virtual**
2. **Gestión Hospitalaria y Clínica**
3. **Dispositivos Médicos Inteligentes**
4. **Inteligencia Artificial en Diagnóstico**
5. **Salud Mental Digital**
6. **Farmacia Digital y Delivery**
7. **Análisis de Datos en Salud**
8. **Seguros y Financiamiento de Salud**

---

## 🛠 Stack Tecnológico

### Core

- **React 18+**: Librería para construcción de interfaces de usuario
- **TypeScript 5+**: Tipado estático para mayor robustez
- **Vite**: Build tool ultrarrápido con HMR

### Routing y Estado

- **React Router v6**: Navegación y routing
- **Context API**: Gestión de estado (opcional: Zustand)

### HTTP y APIs

- **Axios**: Cliente HTTP con interceptors y retry logic
- **REST API Integration**: Comunicación con backend

### Estilos

- **CSS3**: Estilos personalizados con variables CSS
- **CSS Grid & Flexbox**: Layouts responsivos
- **Mobile-First**: Enfoque mobile-first con breakpoints estratégicos

### Iconos

- **Lucide React**: Biblioteca de iconos moderna y ligera

### Testing y Quality Assurance

- **Vitest**: Framework de testing rápido y moderno
- **React Testing Library**: Testing de componentes React
- **@testing-library/jest-dom**: Matchers adicionales para testing

### Herramientas de Desarrollo

- **ESLint**: Linting de código
- **Prettier**: Formateo consistente de código
- **Husky**: Pre-commit hooks para calidad de código
- **TypeScript**: Type checking estático

---

## 📁 Estructura del Proyecto

```
healthtech-peru/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React reutilizables
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx   # Tests del Header
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   ├── Footer.test.tsx   # Tests del Footer
│   │   ├── Footer.css
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.css
│   │   ├── CompanyCard.tsx
│   │   └── CompanyCard.css
│   ├── pages/            # Páginas de la aplicación
│   │   ├── HomePage.tsx
│   │   ├── HomePage.test.tsx # Tests de HomePage
│   │   ├── HomePage.css
│   │   ├── ContactPage.tsx
│   │   ├── ContactPage.test.tsx # Tests de ContactPage
│   │   └── ContactPage.css
│   ├── services/         # Servicios de API
│   │   ├── api.ts           # Cliente HTTP base
│   │   ├── companyService.ts
│   │   ├── eventService.ts
│   │   ├── blogService.ts
│   │   └── formService.ts
│   ├── test/             # Configuración de testing
│   │   └── setup.ts         # Setup de Vitest
│   ├── types/            # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── data/             # Datos de ejemplo (mock data)
│   │   └── mockData.ts
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos de App
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── .husky/               # Git hooks con Husky
│   └── pre-commit           # Hook de pre-commit
├── .prettierrc           # Configuración de Prettier
├── .prettierignore       # Archivos ignorados por Prettier
├── .env.example          # Variables de entorno de ejemplo
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración TypeScript
├── vite.config.ts        # Configuración Vite + Vitest
└── README.md             # Documentación
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** 16+
- **npm** o **yarn**

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/healthtech-peru.git
cd healthtech-peru
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Configurar variables de entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_ENV=development
```

### Paso 4: Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo con HMR

# Producción
npm run build            # Construye la aplicación para producción
npm run preview          # Preview de la build de producción

# Testing
npm run test             # Ejecuta tests en modo watch
npm run test:ui          # Abre interfaz visual de tests con Vitest UI
npm run test:coverage    # Ejecuta tests con reporte de cobertura

# Calidad de Código
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier
npm run format:check     # Verifica formato sin modificar archivos
```

---

## 🧩 Arquitectura de Componentes

### Componentes Principales

#### 1. Header
- Navegación principal
- Logo y marca
- Menú responsive con hamburger en móvil
- CTA "Únete al Ecosistema"

#### 2. HeroSection
- Título y descripción principal
- Estadísticas animadas del ecosistema
- CTAs principales
- Diseño con gradientes y animaciones

#### 3. CompanyCard
- Tarjeta para mostrar empresas
- Logo, nombre, descripción
- Etiquetas de categorías
- Metadatos (ubicación, año de fundación)
- Badge de etapa de desarrollo
- Enlaces a sitio web y redes sociales

#### 4. Footer
- Información de la organización
- Enlaces rápidos
- Formulario de newsletter
- Aliados estratégicos
- Redes sociales

### Principios de Diseño

- **Atomic Design**: Componentes modulares y reutilizables
- **Props Tipadas**: Todas las props con TypeScript
- **Separación de Concerns**: Lógica separada de presentación
- **Responsive**: Mobile-first con breakpoints bien definidos

---

## 🔌 Integración con APIs

### Cliente HTTP Base (`api.ts`)

```typescript
// Configuración automática de headers
// Manejo centralizado de errores
// Retry logic para errores de red
// Interceptors para autenticación
```

### Servicios Especializados

#### CompanyService
- `getCompanies()`: Obtener empresas con filtros y paginación
- `getCompanyById()`: Obtener empresa específica
- `getFeaturedCompanies()`: Empresas destacadas
- `getCompaniesByCategory()`: Filtrar por categoría
- `getEcosystemStats()`: Estadísticas del ecosistema

#### EventService
- `getEvents()`: Eventos con filtros
- `getEventById()`: Evento específico
- `getUpcomingEvents()`: Próximos eventos
- `registerToEvent()`: Registro a eventos

#### BlogService
- `getArticles()`: Artículos con paginación
- `getArticleById()`: Artículo específico
- `getFeaturedArticles()`: Artículos destacados
- `getMostReadArticles()`: Más leídos

#### FormService
- `submitAffiliationForm()`: Envío de solicitud de afiliación
- `submitContactForm()`: Formulario de contacto
- `subscribeToNewsletter()`: Suscripción a newsletter
- Validaciones: RUC, email, teléfono, URL

### Características de los Servicios

- **Caching**: Cache de 5 minutos para reducir requests
- **Debouncing**: Optimización de búsquedas
- **Error Handling**: Manejo robusto de errores
- **TypeScript**: Tipos completos para todas las respuestas

---

## 📱 Diseño Responsivo

### Breakpoints Estratégicos

```css
/* Mobile Pequeño */
320px - 375px

/* Mobile Estándar */
375px - 428px

/* Mobile Grande */
428px - 768px

/* Tablet */
768px - 1024px

/* Desktop Pequeño */
1024px - 1440px

/* Desktop Grande */
1440px+
```

### Adaptaciones por Dispositivo

#### Mobile
- Navegación colapsada en menú hamburguesa
- Directorio en columna única
- Filtros accesibles mediante botón flotante
- CTAs con tamaño amplio para interacción táctil
- Tipografía optimizada para lectura en pantallas pequeñas

#### Tablet
- Navegación híbrida
- Grid de 2 columnas en directorio
- Filtros en sidebar colapsable

#### Desktop
- Navegación horizontal siempre visible
- Grid de 3-4 columnas
- Filtros en sidebar fija
- Footer expandido con todas las secciones visibles

### Características de Accesibilidad

- ✅ Navegación completa por teclado
- ✅ Focus visible en elementos interactivos
- ✅ Etiquetas ARIA en elementos complejos
- ✅ Estructura semántica HTML5
- ✅ Skip links para lectores de pantalla
- ✅ Textos alternativos descriptivos
- ✅ Formularios accesibles con labels asociados
- ✅ Contraste mínimo 4.5:1 (WCAG 2.1 AA)

---

## 🧪 Testing

### Estrategia de Testing

El proyecto implementa una estrategia de testing completa con **Vitest** y **React Testing Library**, siguiendo las mejores prácticas de testing moderno.

### Componentes Testeados

#### Header Component (10+ tests)
- ✅ Renderizado de elementos principales
- ✅ Navegación y enlaces
- ✅ Menú móvil (abrir/cerrar)
- ✅ Scroll effect y estado del header
- ✅ Interacciones del usuario

#### Footer Component (12+ tests)
- ✅ Formulario de newsletter
- ✅ Validación de email
- ✅ Manejo de estados (loading, success, error)
- ✅ Enlaces de redes sociales
- ✅ Información de contacto

#### StatsSection Component (13+ tests)
- ✅ Renderizado de estadísticas
- ✅ Iconos y descripciones
- ✅ Contador animado
- ✅ Intersection Observer
- ✅ Datos dinámicos

#### HomePage Component (18+ tests)
- ✅ Secciones principales
- ✅ Pilares del ecosistema
- ✅ Directiva expandible
- ✅ Navegación interna
- ✅ Componentes integrados

#### ContactPage Component (18+ tests)
- ✅ Formulario completo
- ✅ Validaciones de campos
- ✅ Canales de comunicación
- ✅ Redes sociales
- ✅ Envío de formulario

### Cobertura de Testing

**Total de tests:** 71+ tests unitarios y de integración

```bash
# Ejecutar todos los tests
npm run test

# Ver interfaz visual de tests
npm run test:ui

# Generar reporte de cobertura
npm run test:coverage
```

### Configuración de Testing

- **Environment:** jsdom para simular navegador
- **Setup Global:** Configuración automática de mocks
- **Coverage:** Configurado con v8 provider
- **Mocks Incluidos:**
  - IntersectionObserver
  - window.matchMedia
  - Iconos de lucide-react
  - Servicios de API

---

## ⚡ Optimizaciones de Rendimiento

### Lazy Loading

Implementación de **code splitting** mediante lazy loading de componentes con React.lazy() y Suspense:

```typescript
// Lazy loading de páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const VerticalesPage = lazy(() => import('./pages/VerticalesPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
```

**Beneficios:**
- 🚀 Reducción del bundle inicial (~40%)
- ⚡ Carga más rápida de la página inicial
- 📦 Carga bajo demanda de rutas
- 🎯 Mejor experiencia de usuario

### Build Optimization

- **Vite**: Build ultrarrápido con tree-shaking automático
- **Minificación**: Código y assets minificados en producción
- **CSS Optimizado**: Eliminación de CSS no utilizado

### Métricas de Rendimiento (Objetivo)

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1

---

## 🔒 Quality Assurance

### Prettier

Formateo automático de código con configuración estandarizada:

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

### Husky

Pre-commit hooks automáticos para mantener calidad:

- ✅ Verificación de formato con Prettier
- ✅ Linting con ESLint
- ✅ Type checking con TypeScript
- ✅ Prevención de commits con errores

### ESLint

Configuración estricta con reglas de React y TypeScript para código consistente y libre de errores comunes.

---

## 🤝 Contribución

### Desarrollo

Este proyecto sigue la metodología **SCRUM** con sprints de 2 semanas.

### Workflow de Git

```bash
# Crear rama de feature
git checkout -b feature/nombre-feature

# Commits siguiendo Conventional Commits
git commit -m "feat: descripción del cambio"
git commit -m "fix: corrección de bug"
git commit -m "docs: actualización de documentación"

# Push y PR
git push origin feature/nombre-feature
```

### Tipos de Commits

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Documentación
- `style:` Formateo de código
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento

---

## 👨‍💻 Autor

**Martínez Casas Cristhian Emilio**
Estudiante de Ingeniería de Sistemas - UNCP
Practicante en DISTRIBUIDORA SENTRO S.A.C.

**Asesor Empresarial:** Ing. Alejandro Apolinario Mayta Canchari
**Asesor Académico:** Ing. Rivera de la Cruz Leoncio Abelardo

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de las prácticas preprofesionales en DISTRIBUIDORA SENTRO S.A.C. para la creación de la plataforma HealthTech Perú.

---

## 📞 Contacto

Para consultas sobre el proyecto:

- Email: contacto@healthtechperu.com
- LinkedIn: [HealthTech Perú](https://linkedin.com)

---

**🚀 Impulsando la transformación digital de la salud en Perú**
