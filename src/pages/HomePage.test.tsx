import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock de los componentes hijos
vi.mock('../components/HeroSection', () => ({
  default: () => <div data-testid="hero-section">HeroSection</div>,
}));

vi.mock('../components/StatsSection', () => ({
  default: () => <div data-testid="stats-section">StatsSection</div>,
}));

vi.mock('../components/CategoriesSection', () => ({
  default: () => <div data-testid="categories-section">CategoriesSection</div>,
}));

// Mock del módulo lucide-react
vi.mock('lucide-react', () => ({
  Heart: () => <div data-testid="heart-icon">Heart</div>,
  Target: () => <div data-testid="target-icon">Target</div>,
  Lightbulb: () => <div data-testid="lightbulb-icon">Lightbulb</div>,
  Shield: () => <div data-testid="shield-icon">Shield</div>,
  Users: () => <div data-testid="users-icon">Users</div>,
  ChevronDown: () => <div data-testid="chevron-down">ChevronDown</div>,
  ChevronUp: () => <div data-testid="chevron-up">ChevronUp</div>,
}));

const renderHomePage = () => {
  return render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe('HomePage Component', () => {
  it('renderiza la página de inicio correctamente', () => {
    renderHomePage();
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('muestra el título de bienvenida', () => {
    renderHomePage();
    expect(
      screen.getByText(/Bienvenidos al Ecosistema HealthTech del Perú/i)
    ).toBeInTheDocument();
  });

  it('muestra la descripción del ecosistema', () => {
    renderHomePage();
    expect(
      screen.getByText(/Nuestro país representa una gran oportunidad/i)
    ).toBeInTheDocument();
  });

  it('renderiza los 4 pilares principales', () => {
    renderHomePage();
    expect(screen.getByText('Inclusión en Salud')).toBeInTheDocument();
    expect(screen.getByText('Innovación Digital')).toBeInTheDocument();
    expect(screen.getByText('Acceso al Capital')).toBeInTheDocument();
    expect(screen.getByText('Marco Regulatorio')).toBeInTheDocument();
  });

  it('muestra los iconos de los pilares', () => {
    renderHomePage();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('lightbulb-icon')).toBeInTheDocument();
    expect(screen.getByTestId('target-icon')).toBeInTheDocument();
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument();
  });

  it('renderiza la sección de categorías', () => {
    renderHomePage();
    expect(screen.getByTestId('categories-section')).toBeInTheDocument();
  });

  it('renderiza la sección de estadísticas', () => {
    renderHomePage();
    expect(screen.getByTestId('stats-section')).toBeInTheDocument();
  });

  it('muestra la sección de valor "Por qué unirse"', () => {
    renderHomePage();
    expect(
      screen.getByText(/HealthTech Perú está para apoyar tu crecimiento/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Estamos listos para acompañarte/i)).toBeInTheDocument();
  });

  it('muestra información sobre el rol de HealthTech Perú', () => {
    renderHomePage();
    expect(
      screen.getByText(/En HealthTech Perú somos protagonistas del ecosistema/i)
    ).toBeInTheDocument();
  });

  it('tiene un botón para expandir la información de la directiva', () => {
    renderHomePage();
    const directivaButton = screen.getByRole('button', { name: /directiva actual/i });
    expect(directivaButton).toBeInTheDocument();
  });

  it('expande y colapsa la sección de directiva al hacer clic', () => {
    renderHomePage();
    const directivaButton = screen.getByRole('button', { name: /directiva actual/i });

    // Inicialmente la directiva no está visible
    expect(screen.queryByText(/Nuestra directiva está conformada/i)).not.toBeInTheDocument();

    // Click para expandir
    fireEvent.click(directivaButton);
    expect(
      screen.getByText(/Nuestra directiva está conformada por líderes/i)
    ).toBeInTheDocument();

    // Click para colapsar
    fireEvent.click(directivaButton);
    expect(screen.queryByText(/Nuestra directiva está conformada/i)).not.toBeInTheDocument();
  });

  it('muestra el icono correcto en el botón de directiva según el estado', () => {
    renderHomePage();
    const directivaButton = screen.getByRole('button', { name: /directiva actual/i });

    // Inicialmente muestra ChevronDown
    expect(screen.getByTestId('chevron-down')).toBeInTheDocument();
    expect(screen.queryByTestId('chevron-up')).not.toBeInTheDocument();

    // Después de expandir muestra ChevronUp
    fireEvent.click(directivaButton);
    expect(screen.getByTestId('chevron-up')).toBeInTheDocument();
    expect(screen.queryByTestId('chevron-down')).not.toBeInTheDocument();
  });

  it('tiene la sección "sobre-nosotros" con el id correcto', () => {
    const { container } = renderHomePage();
    const sobreNosotrosSection = container.querySelector('#sobre-nosotros');
    expect(sobreNosotrosSection).toBeInTheDocument();
  });

  it('tiene la sección "directiva" con el id correcto', () => {
    const { container } = renderHomePage();
    const directivaSection = container.querySelector('#directiva');
    expect(directivaSection).toBeInTheDocument();
  });

  it('muestra la nota sobre actualización de directiva', () => {
    renderHomePage();
    const directivaButton = screen.getByRole('button', { name: /directiva actual/i });
    fireEvent.click(directivaButton);

    expect(
      screen.getByText(/La conformación de la directiva se actualizará próximamente/i)
    ).toBeInTheDocument();
  });
});
