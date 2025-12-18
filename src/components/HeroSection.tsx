import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Building2, TrendingUp, Activity } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Geometric Shapes Background */}
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className={`hero-badge ${isVisible ? 'visible' : ''}`}>
            <Activity size={16} />
            <span>Ecosistema Líder de Tecnología en Salud</span>
          </div>

          {/* Main Heading */}
          <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
            Impulsando la
            <span className="hero-title-gradient"> Transformación Digital </span>
            de la Salud en Perú
          </h1>

          {/* Description */}
          <p className={`hero-description ${isVisible ? 'visible' : ''}`}>
            HealthTech Perú conecta startups innovadoras, instituciones médicas, inversionistas
            y reguladores para construir el futuro de la salud digital en el país.
          </p>

          {/* CTA Buttons */}
          <div className={`hero-cta ${isVisible ? 'visible' : ''}`}>
            <Link to="/directorio" className="btn-hero btn-hero-primary">
              <span>Explorar Ecosistema</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/afiliacion" className="btn-hero btn-hero-secondary">
              <span>Únete a Nosotros</span>
            </Link>
          </div>

          {/* Stats Mini */}
          <div className={`hero-stats-mini ${isVisible ? 'visible' : ''}`}>
            <div className="stat-mini">
              <Building2 size={20} />
              <div>
                <div className="stat-mini-value">50+</div>
                <div className="stat-mini-label">Empresas</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-mini">
              <Users size={20} />
              <div>
                <div className="stat-mini-value">200+</div>
                <div className="stat-mini-label">Profesionales</div>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-mini">
              <Heart size={20} />
              <div>
                <div className="stat-mini-value">1M+</div>
                <div className="stat-mini-label">Pacientes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-visual-glow"></div>
          <div className="hero-visual-content">
            <div className="floating-element element-1">
              <Heart size={32} className="element-icon" />
              <span className="element-label">Telemedicina</span>
            </div>
            <div className="floating-element element-2">
              <Activity size={32} className="element-icon" />
              <span className="element-label">IA Diagnóstico</span>
            </div>
            <div className="floating-element element-3">
              <Building2 size={32} className="element-icon" />
              <span className="element-label">Gestión Hospitalaria</span>
            </div>
            <div className="floating-element element-4">
              <TrendingUp size={32} className="element-icon" />
              <span className="element-label">Analytics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default HeroSection;
