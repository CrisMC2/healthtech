import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsSection from './StatsSection';

// Mock del módulo lucide-react
vi.mock('lucide-react', () => ({
  Building2: () => <div data-testid="building-icon">Building2</div>,
  Users: () => <div data-testid="users-icon">Users</div>,
  Heart: () => <div data-testid="heart-icon">Heart</div>,
  TrendingUp: () => <div data-testid="trending-up-icon">TrendingUp</div>,
  Award: () => <div data-testid="award-icon">Award</div>,
  Zap: () => <div data-testid="zap-icon">Zap</div>,
}));

describe('StatsSection Component', () => {
  it('renderiza la sección de estadísticas correctamente', () => {
    render(<StatsSection />);
    const section = screen.getByText(/Transformando la salud con/i);
    expect(section).toBeInTheDocument();
  });

  it('muestra el título principal', () => {
    render(<StatsSection />);
    expect(screen.getByText(/Transformando la salud con/i)).toBeInTheDocument();
    expect(screen.getByText(/resultados medibles/i)).toBeInTheDocument();
  });

  it('muestra la descripción', () => {
    render(<StatsSection />);
    expect(
      screen.getByText(/Nuestro ecosistema está generando un impacto real/i)
    ).toBeInTheDocument();
  });

  it('muestra el badge de "Impacto"', () => {
    render(<StatsSection />);
    expect(screen.getByText('Impacto')).toBeInTheDocument();
  });

  it('renderiza todas las tarjetas de estadísticas', () => {
    render(<StatsSection />);

    expect(screen.getByText('Empresas')).toBeInTheDocument();
    expect(screen.getByText('Profesionales')).toBeInTheDocument();
    expect(screen.getByText('Pacientes')).toBeInTheDocument();
    expect(screen.getByText('Inversión')).toBeInTheDocument();
    expect(screen.getByText('Premios')).toBeInTheDocument();
    expect(screen.getByText('Eventos')).toBeInTheDocument();
  });

  it('muestra las descripciones de cada estadística', () => {
    render(<StatsSection />);

    expect(screen.getByText(/Startups y empresas registradas/i)).toBeInTheDocument();
    expect(screen.getByText(/Expertos en HealthTech/i)).toBeInTheDocument();
    expect(screen.getByText(/Beneficiados con tecnología/i)).toBeInTheDocument();
    expect(screen.getByText(/USD en financiamiento/i)).toBeInTheDocument();
    expect(screen.getByText(/Reconocimientos internacionales/i)).toBeInTheDocument();
    expect(screen.getByText(/Anuales de networking/i)).toBeInTheDocument();
  });

  it('renderiza todos los iconos correctamente', () => {
    render(<StatsSection />);

    expect(screen.getByTestId('building-icon')).toBeInTheDocument();
    expect(screen.getByTestId('users-icon')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('trending-up-icon')).toBeInTheDocument();
    expect(screen.getByTestId('award-icon')).toBeInTheDocument();
    expect(screen.getByTestId('zap-icon')).toBeInTheDocument();
  });

  it('muestra el año actual en el footer', () => {
    render(<StatsSection />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('muestra la información de crecimiento anual', () => {
    render(<StatsSection />);
    expect(screen.getByText(/Crecimiento anual del 40%/i)).toBeInTheDocument();
  });

  it('inicializa los contadores en 0', () => {
    render(<StatsSection />);
    const statCards = screen.getAllByText('0');
    expect(statCards.length).toBeGreaterThan(0);
  });

  it('tiene 6 tarjetas de estadísticas', () => {
    render(<StatsSection />);
    const statLabels = [
      'Empresas',
      'Profesionales',
      'Pacientes',
      'Inversión',
      'Premios',
      'Eventos',
    ];

    statLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('contiene elementos de fondo para diseño', () => {
    const { container } = render(<StatsSection />);
    const backgroundElements = container.querySelector('.stats-background');
    expect(backgroundElements).toBeInTheDocument();
  });

  it('muestra los sufijos correctos en las estadísticas', () => {
    render(<StatsSection />);

    // Verificar que hay múltiples elementos con "+" (sufijos)
    const elementsWithPlus = screen.getAllByText(/\+/);
    expect(elementsWithPlus.length).toBeGreaterThan(0);
  });

  it('tiene la clase CSS correcta en el contenedor principal', () => {
    const { container } = render(<StatsSection />);
    const statsSection = container.querySelector('.stats-section');
    expect(statsSection).toBeInTheDocument();
  });

  it('muestra el grid de estadísticas con la clase correcta', () => {
    const { container } = render(<StatsSection />);
    const statsGrid = container.querySelector('.stats-grid');
    expect(statsGrid).toBeInTheDocument();
  });

  it('cada tarjeta tiene el valor inicial correcto', () => {
    render(<StatsSection />);
    const statValues = screen.getAllByText('0');

    // Debe haber al menos 6 valores de 0 (uno por cada estadística)
    expect(statValues.length).toBeGreaterThanOrEqual(6);
  });
});
