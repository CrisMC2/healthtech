import apiClient, { handleApiError } from './api';
import type { BlogArticle, ApiResponse, PaginatedResponse } from '../types';

class BlogService {
  private endpoint = '/blog';

  // Obtener artículos con paginación y filtros
  async getArticles(
    page: number = 1,
    pageSize: number = 9,
    filters?: {
      categoria?: string;
      busqueda?: string;
    }
  ): Promise<PaginatedResponse<BlogArticle>> {
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('pageSize', pageSize.toString());

      if (filters) {
        if (filters.categoria) {
          params.append('categoria', filters.categoria);
        }
        if (filters.busqueda) {
          params.append('q', filters.busqueda);
        }
      }

      const response = await apiClient.get<PaginatedResponse<BlogArticle>>(
        `${this.endpoint}?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener un artículo por ID
  async getArticleById(id: string): Promise<BlogArticle> {
    try {
      const response = await apiClient.get<ApiResponse<BlogArticle>>(
        `${this.endpoint}/${id}`
      );

      // Incrementar contador de vistas
      this.incrementViews(id).catch(() => {});

      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener artículos destacados
  async getFeaturedArticles(): Promise<BlogArticle[]> {
    try {
      const response = await apiClient.get<ApiResponse<BlogArticle[]>>(
        `${this.endpoint}/featured`
      );
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener artículos más leídos
  async getMostReadArticles(limit: number = 5): Promise<BlogArticle[]> {
    try {
      const response = await apiClient.get<ApiResponse<BlogArticle[]>>(
        `${this.endpoint}/most-read?limit=${limit}`
      );
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Incrementar vistas de un artículo
  private async incrementViews(id: string): Promise<void> {
    try {
      await apiClient.post(`${this.endpoint}/${id}/view`);
    } catch (error) {
      console.error('Error incrementando vistas:', error);
    }
  }
}

export default new BlogService();
