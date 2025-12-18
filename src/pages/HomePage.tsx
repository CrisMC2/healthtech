import { Heart, Target, Lightbulb, Shield, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CategoriesSection from '../components/CategoriesSection';
import './HomePage.css';

const HomePage = () => {
  const [showDirectiva, setShowDirectiva] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Bienvenida - Sección Simple */}
      <section id="sobre-nosotros" className="welcome-home-section">
        <div className="container">
          <h2 className="welcome-home-title">Bienvenidos al Ecosistema HealthTech del Perú</h2>
          <p className="welcome-home-text">
            Nuestro país representa una gran oportunidad para la industria HealthTech. La necesidad
            de transformar el acceso y calidad de salud, el interés institucional de reguladores y
            entidades públicas y privadas, hacen de nuestro ecosistema una plaza llena de oportunidades.
          </p>
        </div>
      </section>

      {/* Pilares - Iconos Simples */}
      <section className="pillars-home-section">
        <div className="container">
          <div className="pillars-home-grid">
            <div className="pillar-home-item">
              <Heart className="pillar-home-icon" />
              <h4>Inclusión en Salud</h4>
            </div>
            <div className="pillar-home-item">
              <Lightbulb className="pillar-home-icon" />
              <h4>Innovación Digital</h4>
            </div>
            <div className="pillar-home-item">
              <Target className="pillar-home-icon" />
              <h4>Acceso al Capital</h4>
            </div>
            <div className="pillar-home-item">
              <Shield className="pillar-home-icon" />
              <h4>Marco Regulatorio</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Categories/Verticales Section */}
      <CategoriesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Por Qué Unirse - Sección de Valor */}
      <section id="por-que-unirse" className="value-home-section">
        <div className="container">
          <div className="value-home-header">
            <h2 className="value-home-title">HealthTech Perú está para apoyar tu crecimiento</h2>
            <h3 className="value-home-subtitle">Estamos listos para acompañarte</h3>
          </div>
          <p className="value-home-text">
            En HealthTech Perú somos protagonistas del ecosistema de salud digital desde 2025.
            Conocemos a los actores del ecosistema, nuestro rol es fortalecer este capital social
            entre nuestros miembros. Asesoramos también a nuestros asociados en referencia al acceso
            al capital, validación clínica y navegación regulatoria en el Perú.
          </p>
        </div>
      </section>

      {/* Directiva - Sección Expandible */}
      <section id="directiva" className="directiva-home-section">
        <div className="container">
          <button
            className="directiva-toggle"
            onClick={() => setShowDirectiva(!showDirectiva)}
          >
            <div className="directiva-toggle-content">
              <Users className="directiva-toggle-icon" />
              <div className="directiva-toggle-text">
                <h3>Directiva Actual</h3>
                <p>Ver los miembros de nuestra directiva</p>
              </div>
            </div>
            {showDirectiva ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {showDirectiva && (
            <div className="directiva-content">
              <p className="directiva-intro">
                Nuestra directiva está conformada por líderes del ecosistema HealthTech peruano,
                con experiencia en emprendimiento, salud, tecnología e inversión.
              </p>
              <div className="directiva-note">
                <p><em>La conformación de la directiva se actualizará próximamente.</em></p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <span className="cta-badge">Únete al Ecosistema</span>
            <h2 className="cta-title">¿Listo para transformar la salud en Perú?</h2>
            <p className="cta-description">
              Accede a networking, recursos exclusivos y oportunidades
              para hacer crecer tu startup HealthTech.
            </p>
            <div className="cta-buttons">
              <a href="/miembros" className="btn-cta-primary">
                Afiliarme Ahora
              </a>
              <a href="/eventos" className="btn-cta-secondary">
                Ver Próximos Eventos
              </a>
            </div>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Networking con expertos</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Eventos exclusivos</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Visibilidad en directorio</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Acceso a inversores</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
