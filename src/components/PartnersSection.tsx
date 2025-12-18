import { useState, useEffect } from 'react';
import './PartnersSection.css';

interface Partner {
  id: string;
  name: string;
  logo?: string;
  category: string;
}

const PartnersSection = () => {
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

    const section = document.querySelector('.partners-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Empresas asociadas de ejemplo (en producción vendrían del backend)
  const partners: Partner[] = [
    { id: '1', name: 'MediPlus', category: 'Telemedicina' },
    { id: '2', name: 'HealthAI', category: 'IA Diagnóstico' },
    { id: '3', name: 'VitalCare', category: 'Gestión Hospitalaria' },
    { id: '4', name: 'MindWell', category: 'Salud Mental' },
    { id: '5', name: 'FarmaExpress', category: 'Farmacia Digital' },
    { id: '6', name: 'HealthData', category: 'Análisis de Datos' },
    { id: '7', name: 'SecureMed', category: 'Seguros' },
    { id: '8', name: 'BioTech Peru', category: 'Dispositivos IoT' },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className={`partners-header ${isVisible ? 'visible' : ''}`}>
          <span className="partners-badge">Ecosistema</span>
          <h2 className="partners-title">Empresas que están transformando la salud en Perú</h2>
          <p className="partners-description">
            Más de 50 empresas confían en HealthTech Perú como su plataforma de conexión y
            crecimiento
          </p>
        </div>

        <div className={`partners-grid ${isVisible ? 'visible' : ''}`}>
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="partner-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="partner-logo-container">
                <div className="partner-logo-placeholder">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-category">{partner.category}</span>
              </div>
              <div className="partner-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className={`partners-footer ${isVisible ? 'visible' : ''}`}>
          <p className="partners-count">+ 50 empresas más formando parte del ecosistema</p>
          <a href="/directorio" className="btn-partners-cta">
            Ver directorio completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
