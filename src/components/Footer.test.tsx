import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import formService from '../services/formService';

// Mock del módulo lucide-react
vi.mock('lucide-react', () => ({
  Linkedin: () => <div data-testid="linkedin-icon">LinkedIn</div>,
  Twitter: () => <div data-testid="twitter-icon">Twitter</div>,
  Mail: () => <div data-testid="mail-icon">Mail</div>,
  Send: () => <div data-testid="send-icon">Send</div>,
}));

// Mock del servicio de formularios
vi.mock('../services/formService', () => ({
  default: {
    validateEmail: vi.fn(),
    subscribeToNewsletter: vi.fn(),
  },
}));

const renderFooter = () => {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza el footer correctamente', () => {
    renderFooter();
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('muestra el logo de HealthTech Perú', () => {
    renderFooter();
    expect(screen.getByText('HealthTech Perú')).toBeInTheDocument();
  });

  it('muestra la descripción de la organización', () => {
    renderFooter();
    expect(
      screen.getByText(/Impulsando la transformación digital de la salud en Perú/i)
    ).toBeInTheDocument();
  });

  it('renderiza los enlaces de redes sociales', () => {
    renderFooter();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
  });

  it('muestra el formulario de newsletter', () => {
    renderFooter();
    expect(screen.getByPlaceholderText(/tu email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/suscribirse/i)).toBeInTheDocument();
  });

  it('muestra el año actual en el copyright', () => {
    renderFooter();
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('valida el email antes de enviar', async () => {
    vi.mocked(formService.validateEmail).mockReturnValue(false);
    renderFooter();

    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const form = emailInput.closest('form');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/por favor ingresa un email válido/i)).toBeInTheDocument();
    });
    expect(formService.subscribeToNewsletter).not.toHaveBeenCalled();
  });

  it('envía el formulario de newsletter correctamente', async () => {
    vi.mocked(formService.validateEmail).mockReturnValue(true);
    vi.mocked(formService.subscribeToNewsletter).mockResolvedValue({
      success: true,
      message: '¡Suscripción exitosa!',
    });

    renderFooter();

    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const form = emailInput.closest('form');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(formService.subscribeToNewsletter).toHaveBeenCalledWith({
        email: 'test@example.com',
      });
    });

    await waitFor(() => {
      expect(screen.getByText(/suscripción exitosa/i)).toBeInTheDocument();
    });
  });

  it('maneja errores al suscribirse al newsletter', async () => {
    vi.mocked(formService.validateEmail).mockReturnValue(true);
    vi.mocked(formService.subscribeToNewsletter).mockRejectedValue(
      new Error('Error de red')
    );

    renderFooter();

    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const form = emailInput.closest('form');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/error de red/i)).toBeInTheDocument();
    });
  });

  it('deshabilita el botón mientras se envía el formulario', async () => {
    vi.mocked(formService.validateEmail).mockReturnValue(true);
    vi.mocked(formService.subscribeToNewsletter).mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );

    renderFooter();

    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const submitButton = screen.getByLabelText(/suscribirse/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    const form = emailInput.closest('form');
    if (form) fireEvent.submit(form);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('tiene enlaces de navegación principales', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /eventos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
  });
});
