import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactPage from './ContactPage';

// Mock del módulo lucide-react
vi.mock('lucide-react', () => ({
  Mail: () => <div data-testid="mail-icon">Mail</div>,
  Phone: () => <div data-testid="phone-icon">Phone</div>,
  MapPin: () => <div data-testid="mappin-icon">MapPin</div>,
  Send: () => <div data-testid="send-icon">Send</div>,
  Linkedin: () => <div data-testid="linkedin-icon">Linkedin</div>,
  Instagram: () => <div data-testid="instagram-icon">Instagram</div>,
  Twitter: () => <div data-testid="twitter-icon">Twitter</div>,
  Youtube: () => <div data-testid="youtube-icon">Youtube</div>,
  Facebook: () => <div data-testid="facebook-icon">Facebook</div>,
  MessageSquare: () => <div data-testid="message-square-icon">MessageSquare</div>,
}));

const renderContactPage = () => {
  return render(
    <BrowserRouter>
      <ContactPage />
    </BrowserRouter>
  );
};

describe('ContactPage Component', () => {
  it('renderiza la página de contacto correctamente', () => {
    renderContactPage();
    expect(screen.getByText(/Contáctanos/i)).toBeInTheDocument();
  });

  it('muestra el formulario de contacto', () => {
    renderContactPage();
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/asunto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  it('muestra los canales de contacto', () => {
    renderContactPage();
    expect(screen.getByText('Email General')).toBeInTheDocument();
    expect(screen.getByText('Afiliaciones')).toBeInTheDocument();
    expect(screen.getAllByText('Alianzas Estratégicas').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Teléfono').length).toBeGreaterThan(0);
  });

  it('muestra las direcciones de email correctas', () => {
    renderContactPage();
    expect(screen.getByText('info@healthtechperu.com')).toBeInTheDocument();
    expect(screen.getByText('membresia@healthtechperu.com')).toBeInTheDocument();
    expect(screen.getByText('alianzas@healthtechperu.com')).toBeInTheDocument();
  });

  it('muestra el número de teléfono', () => {
    renderContactPage();
    expect(screen.getByText(/\+51 999 999 999/i)).toBeInTheDocument();
  });

  it('permite escribir en el campo de nombre', () => {
    renderContactPage();
    const nameInput = screen.getByLabelText(/nombre completo/i);
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    expect(nameInput).toHaveValue('Juan Pérez');
  });

  it('permite escribir en el campo de email', () => {
    renderContactPage();
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    expect(emailInput).toHaveValue('juan@example.com');
  });

  it('permite escribir en el campo de teléfono', () => {
    renderContactPage();
    const phoneInput = screen.getByLabelText(/teléfono/i);
    fireEvent.change(phoneInput, { target: { value: '999888777' } });
    expect(phoneInput).toHaveValue('999888777');
  });

  it('permite escribir en el campo de mensaje', () => {
    renderContactPage();
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    fireEvent.change(messageTextarea, { target: { value: 'Hola, tengo una consulta' } });
    expect(messageTextarea).toHaveValue('Hola, tengo una consulta');
  });

  it('tiene un botón de envío', () => {
    renderContactPage();
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('muestra un alert cuando se envía el formulario', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderContactPage();

    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectSelect = screen.getByLabelText(/asunto/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });

    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    fireEvent.change(subjectSelect, { target: { value: 'general' } });
    fireEvent.change(messageTextarea, { target: { value: 'Consulta de prueba' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(
        'Gracias por contactarnos. Te responderemos pronto.'
      );
    });

    alertSpy.mockRestore();
  });

  it('renderiza las redes sociales', () => {
    renderContactPage();
    expect(screen.getAllByTestId('linkedin-icon').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('instagram-icon').length).toBeGreaterThan(0);
    expect(screen.getAllByTestId('twitter-icon').length).toBeGreaterThan(0);
  });

  it('todos los campos del formulario son requeridos', () => {
    renderContactPage();
    const nameInput = screen.getByLabelText(/nombre completo/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectSelect = screen.getByLabelText(/asunto/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(subjectSelect).toBeRequired();
    expect(messageTextarea).toBeRequired();
  });

  it('el campo de email tiene el tipo correcto', () => {
    renderContactPage();
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('el campo de teléfono tiene el tipo correcto', () => {
    renderContactPage();
    const phoneInput = screen.getByLabelText(/teléfono/i);
    expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  it('muestra información sobre el horario de atención', () => {
    renderContactPage();
    expect(screen.getByText(/Lunes a Viernes, 9am - 6pm/i)).toBeInTheDocument();
  });

  it('tiene un select para elegir el asunto', () => {
    renderContactPage();
    const subjectSelect = screen.getByRole('combobox');
    expect(subjectSelect.tagName).toBe('SELECT');
  });
});
