import apiClient, { handleApiError } from './api';
import type { Event, ApiResponse, PaginatedResponse } from '../types';

class EventService {
  private endpoint = '/events';

  // Obtener eventos con filtros y paginación
  async getEvents(
    page: number = 1,
    pageSize: number = 6,
    filters?: {
      tipo?: string[];
      modalidad?: string[];
      fecha?: 'proximos' | 'pasados';
    }
  ): Promise<PaginatedResponse<Event>> {
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('pageSize', pageSize.toString());

      if (filters) {
        if (filters.tipo && filters.tipo.length > 0) {
          params.append('tipo', filters.tipo.join(','));
        }
        if (filters.modalidad && filters.modalidad.length > 0) {
          params.append('modalidad', filters.modalidad.join(','));
        }
        if (filters.fecha) {
          params.append('fecha', filters.fecha);
        }
      }

      const response = await apiClient.get<PaginatedResponse<Event>>(
        `${this.endpoint}?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener un evento por ID
  async getEventById(id: string): Promise<Event> {
    try {
      const response = await apiClient.get<ApiResponse<Event>>(`${this.endpoint}/${id}`);
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Obtener próximos eventos
  async getUpcomingEvents(): Promise<Event[]> {
    try {
      const response = await apiClient.get<ApiResponse<Event[]>>(
        `${this.endpoint}/upcoming`
      );
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Registrarse a un evento
  async registerToEvent(
    eventId: string,
    participantData: {
      nombre: string;
      email: string;
      telefono?: string;
      empresa?: string;
    }
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post<ApiResponse<any>>(
        `${this.endpoint}/${eventId}/register`,
        participantData
      );
      return {
        success: response.data.success,
        message: response.data.message || 'Registro exitoso',
      };
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }
}

export default new EventService();
