import apiClient, { handleApiError } from './api';
import type {
  Company,
  DirectoryFilters,
  ApiResponse,
  PaginatedResponse,
  HealthTechCategory,
  DevelopmentStage,
} from '../types';

// Servicio para gestión de empresas HealthTech
class CompanyService {
  private endpoint = '/companies';
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();
  private CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

  // Obtener todas las empresas con paginación y filtros
  async getCompanies(
    page: number = 1,
    pageSize: number = 12,
    filters?: Partial<DirectoryFilters>
  ): Promise<PaginatedResponse<Company>> {
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('pageSize', pageSize.toString());

      if (filters) {
        if (filters.categorias && filters.categorias.length > 0) {
          params.append('categorias', filters.categorias.join(','));
        }
        if (filters.etapas && filters.etapas.length > 0) {
          params.append('etapas', filters.etapas.join(','));
        }
        if (filters.ubicaciones && filters.ubicaciones.length > 0) {
          params.append('ubicaciones', filters.ubicaciones.join(','));
        }
        if (filters.busqueda) {
          params.append('q', filters.busqueda);
        }
      }

      const response = await apiClient.get<PaginatedResponse<Company>>(
        `${this.endpoint}?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener una empresa por ID
  async getCompanyById(id: string): Promise<Company> {
    try {
      // Verificar cache primero
      const cachedData = this.getFromCache(id);
      if (cachedData) {
        return cachedData as Company;
      }

      const response = await apiClient.get<ApiResponse<Company>>(`${this.endpoint}/${id}`);

      // Guardar en cache
      this.saveToCache(id, response.data.data);

      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener empresas destacadas
  async getFeaturedCompanies(): Promise<Company[]> {
    try {
      const cacheKey = 'featured_companies';
      const cachedData = this.getFromCache(cacheKey);
      if (cachedData) {
        return cachedData as Company[];
      }

      const response = await apiClient.get<ApiResponse<Company[]>>(`${this.endpoint}/featured`);

      this.saveToCache(cacheKey, response.data.data);
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener empresas por categoría
  async getCompaniesByCategory(category: HealthTechCategory): Promise<Company[]> {
    try {
      const response = await apiClient.get<ApiResponse<Company[]>>(
        `${this.endpoint}/category/${category}`
      );
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener estadísticas del ecosistema
  async getEcosystemStats(): Promise<{
    totalCompanies: number;
    categoriesDistribution: Record<HealthTechCategory, number>;
    stagesDistribution: Record<DevelopmentStage, number>;
    locationsDistribution: Record<string, number>;
  }> {
    try {
      const response = await apiClient.get(`${this.endpoint}/stats`);
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Funciones de cache privadas
  private getFromCache(key: string): unknown | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.CACHE_DURATION;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  private saveToCache(key: string, data: unknown): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  // Limpiar cache
  clearCache(): void {
    this.cache.clear();
  }
}

export default new CompanyService();
