// Tipos para las categorías del ecosistema HealthTech
export type HealthTechCategory =
  | 'telemedicina'
  | 'gestion-hospitalaria'
  | 'dispositivos-inteligentes'
  | 'ia-diagnostico'
  | 'salud-mental'
  | 'farmacia-digital'
  | 'analisis-datos'
  | 'seguros-financiamiento';

// Etapas de desarrollo de las empresas
export type DevelopmentStage = 'Seed' | 'Early Stage' | 'Growth' | 'Consolidada';

// Modelos de negocio
export type BusinessModel = 'B2C' | 'B2B' | 'B2B2C' | 'B2G';

// Interfaz para empresas HealthTech
export interface Company {
  id: string;
  nombre: string;
  descripcion: string;
  logo: string;
  categorias: HealthTechCategory[];
  etapaDesarrollo: DevelopmentStage;
  ubicacion: string;
  modeloNegocio: BusinessModel;
  anoFundacion: number;
  sitioWeb: string;
  redesSociales: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  destacada: boolean;
}

// Interfaz para eventos
export interface Event {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  modalidad: 'Presencial' | 'Virtual' | 'Híbrido';
  tipo: 'Conferencia' | 'Webinar' | 'Meetup' | 'Hackathon' | 'Demo Day';
  imagenBanner: string;
  speakers: Speaker[];
  cuposDisponibles: number;
  cuposTotales: number;
  ubicacion?: string;
  enlaceRegistro: string;
}

// Interfaz para speakers
export interface Speaker {
  nombre: string;
  cargo: string;
  empresa: string;
  foto: string;
}

// Interfaz para artículos del blog
export interface BlogArticle {
  id: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagenDestacada: string;
  autor: string;
  fecha: string;
  categoria: string;
  tiempoLectura: number; // en minutos
  vistas: number;
}

// Interfaz para formulario de afiliación
export interface AffiliationForm {
  // Información de la empresa
  nombreEmpresa: string;
  ruc: string;
  anoFundacion: number;
  sitioWeb: string;

  // Descripción
  propuestaValor: string;
  categorias: HealthTechCategory[];
  etapaDesarrollo: DevelopmentStage;

  // Información del equipo
  tamanoEquipo: number;
  nombreRepresentante: string;
  cargoRepresentante: string;
  emailRepresentante: string;
  telefonoRepresentante: string;

  // Tracción
  numeroClientes?: number;
  facturacionAnual?: string;
  levantamientos?: string;

  // Motivación
  motivacion: string;

  // Archivos adjuntos (URLs después de subir)
  pitch?: string;
  logoEmpresa?: string;
}

// Interfaz para formulario de contacto
export interface ContactForm {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  asunto: string;
  mensaje: string;
}

// Interfaz para suscripción a newsletter
export interface NewsletterSubscription {
  email: string;
  nombre?: string;
}

// Tipos para filtros del directorio
export interface DirectoryFilters {
  categorias: HealthTechCategory[];
  etapas: DevelopmentStage[];
  ubicaciones: string[];
  modelosNegocio: BusinessModel[];
  busqueda: string;
}

// Tipos para respuestas de API
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

// Categorías con información detallada
export interface CategoryInfo {
  id: HealthTechCategory;
  nombre: string;
  descripcion: string;
  icono: string;
  ejemplos: string[];
  casosDeUso: string[];
  estadisticas?: {
    label: string;
    valor: string;
  }[];
}
