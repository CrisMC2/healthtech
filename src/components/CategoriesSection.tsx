import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Brain,
  Building2,
  HeartPulse,
  Pill,
  Watch,
  BarChart3,
  Shield,
  ArrowRight,
} from 'lucide-react';
import './CategoriesSection.css';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
  description: string;
  color: string;
  gradient: string;
}

const CategoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.categories-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const categories: Category[] = [
    {
      id: 'telemedicina',
      name: 'Telemedicina',
      icon: <Video size={28} />,
      count: 15,
      description: 'Consultas médicas remotas y monitoreo virtual de pacientes',
      color: '#00a651',
      gradient: 'linear-gradient(135deg, #00a651 0%, #00d4aa 100%)',
    },
    {
      id: 'ia-diagnostico',
      name: 'IA en Diagnóstico',
      icon: <Brain size={28} />,
      count: 8,
      description: 'Inteligencia artificial para diagnóstico y análisis médico',
      color: '#0077be',
      gradient: 'linear-gradient(135deg, #0077be 0%, #00d4aa 100%)',
    },
    {
      id: 'gestion-hospitalaria',
      name: 'Gestión Hospitalaria',
      icon: <Building2 size={28} />,
      count: 12,
      description: 'Software para administración y operaciones hospitalarias',
      color: '#008a43',
      gradient: 'linear-gradient(135deg, #008a43 0%, #00a651 100%)',
    },
    {
      id: 'salud-mental',
      name: 'Salud Mental',
      icon: <HeartPulse size={28} />,
      count: 10,
      description: 'Plataformas de apoyo psicológico y bienestar emocional',
      color: '#00d4aa',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #0077be 100%)',
    },
    {
      id: 'farmacia-digital',
      name: 'Farmacia Digital',
      icon: <Pill size={28} />,
      count: 7,
      description: 'Marketplace y delivery de medicamentos y productos médicos',
      color: '#00a651',
      gradient: 'linear-gradient(135deg, #00a651 0%, #008a43 100%)',
    },
    {
      id: 'dispositivos-iot',
      name: 'Dispositivos IoT',
      icon: <Watch size={28} />,
      count: 6,
      description: 'Wearables y dispositivos conectados para salud',
      color: '#0077be',
      gradient: 'linear-gradient(135deg, #0077be 0%, #005a8a 100%)',
    },
    {
      id: 'analisis-datos',
      name: 'Análisis de Datos',
      icon: <BarChart3 size={28} />,
      count: 5,
      description: 'Big data y analytics para optimización en salud',
      color: '#00d4aa',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #00a651 100%)',
    },
    {
      id: 'seguros-salud',
      name: 'Seguros de Salud',
      icon: <Shield size={28} />,
      count: 4,
      description: 'Insurtech y soluciones de financiamiento médico',
      color: '#008a43',
      gradient: 'linear-gradient(135deg, #008a43 0%, #0077be 100%)',
    },
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className={`categories-header ${isVisible ? 'visible' : ''}`}>
          <span className="categories-badge">Categorías</span>
          <h2 className="categories-title">
            Explora el ecosistema de
            <span className="categories-title-gradient"> HealthTech</span>
          </h2>
          <p className="categories-description">
            Descubre las diferentes verticales de tecnología en salud que están transformando
            el sector médico en Perú
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/directorio?categoria=${category.id}`}
              className={`category-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="category-icon-wrapper">
                <div
                  className="category-icon"
                  style={{ background: category.gradient }}
                >
                  {category.icon}
                </div>
                <div className="category-icon-glow" style={{ background: category.color }}></div>
              </div>

              <div className="category-content">
                <div className="category-header-row">
                  <h3 className="category-name">{category.name}</h3>
                  <span className="category-count">{category.count}</span>
                </div>
                <p className="category-description">{category.description}</p>
              </div>

              <div className="category-arrow">
                <ArrowRight size={20} />
              </div>

              <div className="category-hover-bg" style={{ background: category.gradient }}></div>
            </Link>
          ))}
        </div>

        <div className={`categories-footer ${isVisible ? 'visible' : ''}`}>
          <Link to="/directorio" className="btn-categories-cta">
            Ver todas las empresas
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
