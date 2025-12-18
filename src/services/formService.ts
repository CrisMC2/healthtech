import apiClient, { handleApiError } from './api';
import type { AffiliationForm, ContactForm, NewsletterSubscription, ApiResponse } from '../types';

class FormService {
  // Enviar formulario de afiliación
  async submitAffiliationForm(
    formData: AffiliationForm
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post<ApiResponse<unknown>>('/affiliation', formData);
      return {
        success: response.data.success,
        message: response.data.message || 'Solicitud enviada exitosamente',
      };
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Subir archivos para el formulario de afiliación
  async uploadFile(file: File, type: 'logo' | 'pitch'): Promise<{ url: string }> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);

      const response = await apiClient.post<ApiResponse<{ url: string }>>('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.data;
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Enviar formulario de contacto
  async submitContactForm(formData: ContactForm): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post<ApiResponse<unknown>>('/contact', formData);
      return {
        success: response.data.success,
        message: response.data.message || 'Mensaje enviado exitosamente',
      };
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Suscribirse al newsletter
  async subscribeToNewsletter(
    subscription: NewsletterSubscription
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post<ApiResponse<unknown>>(
        '/newsletter/subscribe',
        subscription
      );
      return {
        success: response.data.success,
        message: response.data.message || 'Suscripción exitosa',
      };
    } catch (error) {
      const message = handleApiError(error);
      throw new Error(message);
    }
  }

  // Validar RUC (validación básica)
  validateRUC(ruc: string): boolean {
    // RUC en Perú tiene 11 dígitos
    const rucRegex = /^[0-9]{11}$/;
    return rucRegex.test(ruc);
  }

  // Validar email
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validar teléfono peruano
  validatePhone(phone: string): boolean {
    const phoneRegex = /^(\+51)?[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // Validar URL
  validateURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}

export default new FormService();
