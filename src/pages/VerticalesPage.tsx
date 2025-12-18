import {
  Video,
  Database,
  Brain,
  Heart,
  Building2,
  Pill,
  ArrowRight
} from 'lucide-react';
import './VerticalesPage.css';

interface Vertical {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
  color: string;
}

const VerticalesPage = () => {
  const verticales: Vertical[] = [
    {
      id: 'telemedicina',
      name: 'Telemedicina & Consulta Virtual',
      icon: <Video />,
      description: 'Plataformas que permiten consultas médicas a distancia, mejorando el acceso a servicios de salud en todo el Perú.',
      examples: [
        'Consultas médicas por videollamada',
        'Diagnóstico remoto',
        'Monitoreo de pacientes a distancia',
        'Segunda opinión médica online'
      ],
      color: '#00a651'
    },
    {
      id: 'health-records',
      name: 'Health Records & Datos Clínicos',
      icon: <Database />,
      description: 'Soluciones para la gestión, almacenamiento y análisis seguro de historias clínicas y datos médicos.',
      examples: [
        'Historia clínica electrónica (HCE)',
        'Interoperabilidad de datos médicos',
        'Gestión de resultados de laboratorio',
        'Recetarios electrónicos'
      ],
      color: '#00cc66'
    },
    {
      id: 'diagnostico-ia',
      name: 'Diagnóstico & AI/ML en Salud',
      icon: <Brain />,
      description: 'Tecnologías de inteligencia artificial y machine learning aplicadas al diagnóstico y tratamiento médico.',
      examples: [
        'Diagnóstico por imágenes con IA',
        'Detección temprana de enfermedades',
        'Análisis predictivo de riesgos',
        'Apoyo en decisiones clínicas'
      ],
      color: '#9333ea'
    },
    {
      id: 'mental-tech',
      name: 'Salud Mental Digital (MentalTech)',
      icon: <Heart />,
      description: 'Plataformas especializadas en salud mental, terapia psicológica y bienestar emocional digital.',
      examples: [
        'Terapia psicológica online',
        'Apps de meditación y mindfulness',
        'Programas de manejo de estrés',
        'Seguimiento de salud mental'
      ],
      color: '#ec4899'
    },
    {
      id: 'gestion-hospitalaria',
      name: 'Gestión Hospitalaria & SaaS',
      icon: <Building2 />,
      description: 'Software para la administración eficiente de clínicas, hospitales y centros de salud.',
      examples: [
        'Sistemas de gestión hospitalaria (HIS)',
        'Agendamiento de citas',
        'Gestión de inventarios médicos',
        'Facturación y cobranzas'
      ],
      color: '#f59e0b'
    },
    {
      id: 'farmacia-digital',
      name: 'Farmacia Digital & Delivery',
      icon: <Pill />,
      description: 'Plataformas para la venta, entrega y gestión de medicamentos de forma digital y segura.',
      examples: [
        'E-commerce de medicamentos',
        'Delivery de farmacia',
        'Gestión de recetas electrónicas',
        'Programas de adherencia a tratamientos'
      ],
      color: '#06b6d4'
    }
  ];

  return (
    <div className="verticales-page">
      {/* Hero Section */}
      <section className="verticales-hero">
        <div className="container">
          <h1 className="verticales-title">Verticales HealthTech</h1>
          <p className="verticales-subtitle">
            Explorá las diferentes categorías de innovación en salud digital que
            están transformando el ecosistema de salud en el Perú
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="verticales-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>El Ecosistema HealthTech del Perú</h2>
            <p>
              El sector HealthTech abarca un amplio espectro de soluciones tecnológicas
              aplicadas a la salud. Hemos identificado 6 verticales principales que
              representan las áreas de mayor innovación y potencial de impacto en nuestro país.
            </p>
            <p>
              Cada vertical agrupa empresas, startups y soluciones que comparten objetivos
              similares, facilitando la colaboración, el aprendizaje compartido y el
              desarrollo del ecosistema.
            </p>
          </div>
        </div>
      </section>

      {/* Verticales Grid */}
      <section className="verticales-list-section">
        <div className="container">
          <div className="verticales-grid">
            {verticales.map((vertical, index) => (
              <div
                key={vertical.id}
                className="vertical-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="vertical-icon-wrapper"
                  style={{ backgroundColor: vertical.color }}
                >
                  {vertical.icon}
                </div>
                <h3 className="vertical-name">{vertical.name}</h3>
                <p className="vertical-description">{vertical.description}</p>

                <div className="vertical-examples">
                  <h4>Ejemplos de soluciones:</h4>
                  <ul>
                    {vertical.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                </div>

                <div className="vertical-footer">
                  <span
                    className="vertical-badge"
                    style={{ backgroundColor: `${vertical.color}15`, color: vertical.color }}
                  >
                    {vertical.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="verticales-stats-section">
        <div className="container">
          <h2 className="stats-title">El Impacto del HealthTech en Perú</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Startups HealthTech activas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Verticales principales</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Peruanos impactados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$10M+</div>
              <div className="stat-label">Inversión en el sector</div>
            </div>
          </div>
        </div>
      </section>

      {/* Más Verticales */}
      <section className="more-verticales-section">
        <div className="container">
          <div className="more-verticales-box">
            <h2>Más Verticales en Desarrollo</h2>
            <p>
              Además de estas 6 verticales principales, el ecosistema HealthTech incluye
              otras áreas emergentes como:
            </p>
            <div className="more-verticales-list">
              <span className="more-vertical-tag">Wearables & IoMT</span>
              <span className="more-vertical-tag">Seguros de Salud Digital</span>
              <span className="more-vertical-tag">Prevención & Wellness</span>
              <span className="more-vertical-tag">Biotecnología Digital</span>
            </div>
            <p className="more-verticales-note">
              Estas verticales se agregarán al directorio en futuras fases de desarrollo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="verticales-cta-section">
        <div className="container">
          <div className="verticales-cta-box">
            <h2>¿Tu empresa es parte del ecosistema HealthTech?</h2>
            <p>
              Únete a nuestra asociación y conecta con otros innovadores del sector
            </p>
            <div className="cta-buttons">
              <a href="/miembros" className="btn-verticales-cta primary">
                Únete a la Asociación
                <ArrowRight size={20} />
              </a>
              <a href="/contacto" className="btn-verticales-cta secondary">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerticalesPage;
