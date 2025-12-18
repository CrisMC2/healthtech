import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import type { Company } from '../types';
import './CompanyCard.css';

interface CompanyCardProps {
  company: Company;
  onClick?: () => void;
}

const CompanyCard = ({ company, onClick }: CompanyCardProps) => {
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      telemedicina: '#3b82f6',
      'gestion-hospitalaria': '#8b5cf6',
      'dispositivos-inteligentes': '#ec4899',
      'ia-diagnostico': '#f59e0b',
      'salud-mental': '#10b981',
      'farmacia-digital': '#06b6d4',
      'analisis-datos': '#6366f1',
      'seguros-financiamiento': '#ef4444',
    };
    return colors[category] || '#6b7280';
  };

  const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
      telemedicina: 'Telemedicina',
      'gestion-hospitalaria': 'Gestión Hospitalaria',
      'dispositivos-inteligentes': 'Dispositivos Inteligentes',
      'ia-diagnostico': 'IA en Diagnóstico',
      'salud-mental': 'Salud Mental',
      'farmacia-digital': 'Farmacia Digital',
      'analisis-datos': 'Análisis de Datos',
      'seguros-financiamiento': 'Seguros y Financiamiento',
    };
    return labels[category] || category;
  };

  const getStageLabel = (stage: string): string => {
    const labels: Record<string, string> = {
      Seed: 'Seed',
      'Early Stage': 'Early Stage',
      Growth: 'Crecimiento',
      Consolidada: 'Consolidada',
    };
    return labels[stage] || stage;
  };

  const getStageColor = (stage: string): string => {
    const colors: Record<string, string> = {
      Seed: '#fbbf24',
      'Early Stage': '#60a5fa',
      Growth: '#34d399',
      Consolidada: '#a78bfa',
    };
    return colors[stage] || '#9ca3af';
  };

  return (
    <article className="company-card" onClick={onClick}>
      {/* Header */}
      <div className="company-card-header">
        <div className="company-logo-wrapper">
          {company.logo ? (
            <img src={company.logo} alt={`Logo de ${company.nombre}`} className="company-logo" />
          ) : (
            <div className="company-logo-placeholder">{company.nombre.charAt(0)}</div>
          )}
        </div>
        {company.destacada && <span className="featured-badge">Destacada</span>}
      </div>

      {/* Content */}
      <div className="company-card-content">
        <h3 className="company-name">{company.nombre}</h3>
        <p className="company-description">{company.descripcion}</p>

        {/* Categories */}
        <div className="company-categories">
          {company.categorias.slice(0, 2).map((categoria) => (
            <span
              key={categoria}
              className="category-tag"
              style={{
                backgroundColor: `${getCategoryColor(categoria)}20`,
                color: getCategoryColor(categoria),
              }}
            >
              {getCategoryLabel(categoria)}
            </span>
          ))}
          {company.categorias.length > 2 && (
            <span className="category-tag-more">+{company.categorias.length - 2}</span>
          )}
        </div>

        {/* Meta information */}
        <div className="company-meta">
          <div className="company-meta-item">
            <MapPin size={14} />
            <span>{company.ubicacion}</span>
          </div>
          <div className="company-meta-item">
            <Calendar size={14} />
            <span>Fundada en {company.anoFundacion}</span>
          </div>
        </div>

        {/* Stage */}
        <div className="company-stage">
          <span
            className="stage-badge"
            style={{
              backgroundColor: `${getStageColor(company.etapaDesarrollo)}20`,
              color: getStageColor(company.etapaDesarrollo),
            }}
          >
            {getStageLabel(company.etapaDesarrollo)}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="company-card-footer">
        <a
          href={company.sitioWeb}
          target="_blank"
          rel="noopener noreferrer"
          className="company-website-link"
          onClick={(e) => e.stopPropagation()}
        >
          <span>Visitar sitio web</span>
          <ExternalLink size={16} />
        </a>

        {/* Social Links */}
        <div className="company-social">
          {company.redesSociales.linkedin && (
            <a
              href={company.redesSociales.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onClick={(e) => e.stopPropagation()}
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {company.redesSociales.twitter && (
            <a
              href={company.redesSociales.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onClick={(e) => e.stopPropagation()}
              aria-label="Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;
