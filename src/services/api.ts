import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';

// Configuración base de Axios
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Crear instancia de Axios con configuración base
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requests - agregar token si existe
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para responses - manejo de errores centralizado
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // Retry logic para errores de red
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK') {
      console.error('Error de conexión. Reintentando...');
      // Implementar retry logic aquí si es necesario
    }

    // Manejo de errores de autenticación
    if (error.response?.status === 401) {
      // Redirigir al login o refrescar token
      console.error('No autorizado. Por favor inicia sesión.');
    }

    // Manejo de errores del servidor
    if (error.response?.status === 500) {
      console.error('Error del servidor. Por favor intenta más tarde.');
    }

    return Promise.reject(error);
  }
);

export default apiClient;

// Utilidades para manejo de errores
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Error de respuesta del servidor
      return error.response.data?.message || 'Error en la solicitud';
    } else if (error.request) {
      // Error de red
      return 'No se pudo conectar con el servidor';
    }
  }
  return 'Ha ocurrido un error inesperado';
};
