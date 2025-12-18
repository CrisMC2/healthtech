import {
  Check,
  Star,
  Rocket,
  Building,
  Handshake,
  Users,
  GraduationCap,
  Calendar,
  TrendingUp,
  Network,
  FileText,
  Award
} from 'lucide-react';
import { useState } from 'react';
import './MembershipPage.css';

interface MembershipTier {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  icon: React.ReactNode;
  color: string;
  popular?: boolean;
  benefits: string[];
  description: string;
}

const MembershipPage = () => {
  const [selectedTier, setSelectedTier] = useState('startup');

  const membershipTiers: MembershipTier[] = [
    {
      id: 'basica',
      name: 'Básica Gratuita',
      price: 'S/. 0',
      priceDetail: 'Gratis para siempre',
      icon: <Star />,
      color: '#00a651',
      description: 'Ideal para conocer el ecosistema HealthTech y comenzar a conectar',
      benefits: [
        'Acceso a eventos seleccionados',
        'Newsletter mensual del sector',
        'Acceso al directorio de miembros',
        'Participación en grupos de WhatsApp',
        'Descuentos en eventos pagos'
      ]
    },
    {
      id: 'startup',
      name: 'Startup',
      price: 'S/. 800',
      priceDetail: 'Por año',
      icon: <Rocket />,
      color: '#00a651',
      popular: true,
      description: 'Para startups y emprendimientos HealthTech en crecimiento',
      benefits: [
        'Todo lo de Básica Gratuita',
        'Acceso completo a Academia HealthTech',
        'Acceso ilimitado a todos los recursos',
        'Networking VIP en eventos',
        'Perfil destacado en directorio',
        'Participación en Pitch Competitions',
        'Consultas sobre regulación (2 por año)',
        'Toolkit completo para startups'
      ]
    },
    {
      id: 'corporativa',
      name: 'Corporativa',
      price: 'S/. 3,000',
      priceDetail: 'Por año',
      icon: <Building />,
      color: '#00a651',
      description: 'Para empresas establecidas que buscan liderar la innovación',
      benefits: [
        'Todo lo de Startup',
        'Visibilidad destacada en todos los canales',
        'Stand/patrocinio en eventos principales',
        'Publicación de casos de éxito',
        'Webinars exclusivos para clientes',
        'Conexión directa con hospitales',
        '5 membresías individuales incluidas',
        'Logo en sitio web y materiales',
        'Participación en comités de trabajo'
      ]
    },
    {
      id: 'aliados',
      name: 'Aliados Estratégicos',
      price: 'A medida',
      priceDetail: 'Personalizado',
      icon: <Handshake />,
      color: '#00a651',
      description: 'Para hospitales, aseguradoras, universidades y organismos públicos',
      benefits: [
        'Plan personalizado según necesidades',
        'Colaboración en investigación',
        'Programas de innovación abierta',
        'Validación clínica de soluciones',
        'Capacitación corporativa',
        'Conexión con startups para pilotos',
        'Asesoría especializada',
        'Eventos privados'
      ]
    }
  ];

  const generalBenefits = [
    {
      icon: <Network />,
      title: 'Networking Exclusivo',
      description: 'Conecta con emprendedores, inversionistas y líderes del sector'
    },
    {
      icon: <GraduationCap />,
      title: 'Academia Especializada',
      description: 'Acceso a cursos, webinars y certificaciones en HealthTech'
    },
    {
      icon: <FileText />,
      title: 'Recursos Regulatorios',
      description: 'Guías, templates y soporte para navegar el marco regulatorio'
    },
    {
      icon: <Calendar />,
      title: 'Eventos Prioritarios',
      description: 'Acceso preferencial y descuentos en todos nuestros eventos'
    },
    {
      icon: <TrendingUp />,
      title: 'Oportunidades de Crecimiento',
      description: 'Acceso a inversionistas, programas de aceleración y pilotos'
    },
    {
      icon: <Award />,
      title: 'Visibilidad y Credibilidad',
      description: 'Posiciona tu marca en el ecosistema HealthTech del Perú'
    }
  ];

  const faqs = [
    {
      question: '¿Puedo cambiar de plan en cualquier momento?',
      answer: 'Sí, puedes actualizar tu membresía en cualquier momento. El cambio se aplicará inmediatamente y pagarás la diferencia prorrateada.'
    },
    {
      question: '¿La membresía se renueva automáticamente?',
      answer: 'Sí, las membresías se renuevan automáticamente cada año. Puedes cancelar en cualquier momento sin penalización.'
    },
    {
      question: '¿Ofrecen descuentos para startups en etapa temprana?',
      answer: 'Sí, ofrecemos descuentos especiales para startups pre-seed y seed. Contáctanos para más información sobre nuestros programas de apoyo.'
    },
    {
      question: '¿Qué incluye el acceso a la Academia HealthTech?',
      answer: 'Acceso a todos nuestros cursos online, webinars en vivo, material descargable y certificaciones en temas de regulación, inversión, validación clínica y más.'
    },
    {
      question: '¿Puedo asistir a eventos si soy miembro básico?',
      answer: 'Sí, los miembros básicos pueden asistir a eventos seleccionados y reciben descuentos en eventos pagos. Miembros premium tienen acceso completo.'
    }
  ];

  return (
    <div className="membership-page">
      {/* Hero Section */}
      <section className="membership-hero">
        <div className="container">
          <h1 className="membership-title">Únete a HealthTech Perú</h1>
          <p className="membership-subtitle">
            Forma parte del ecosistema que está transformando la salud digital en el Perú
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="tiers-section">
        <div className="container">
          <div className="section-header">
            <h2>Elige tu Membresía</h2>
            <p>Encuentra el plan perfecto para tu perfil y objetivos</p>
          </div>

          <div className="tiers-grid">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`tier-card ${tier.popular ? 'popular' : ''} ${selectedTier === tier.id ? 'selected' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <div className="popular-badge">Más Popular</div>
                )}

                <div className="tier-icon-wrapper" style={{ backgroundColor: tier.color }}>
                  {tier.icon}
                </div>

                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price-box">
                  <div className="tier-price">{tier.price}</div>
                  <div className="tier-price-detail">{tier.priceDetail}</div>
                </div>

                <p className="tier-description">{tier.description}</p>

                <div className="tier-benefits">
                  {tier.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <Check className="benefit-check" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="btn-join"
                  style={{ backgroundColor: tier.color }}
                >
                  {tier.price === 'A medida' ? 'Contactar' : 'Unirme Ahora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Benefits */}
      <section className="general-benefits-section">
        <div className="container">
          <h2 className="benefits-title">Beneficios de Ser Miembro</h2>
          <div className="general-benefits-grid">
            {generalBenefits.map((benefit, index) => (
              <div key={index} className="general-benefit-card">
                <div className="general-benefit-icon">
                  {benefit.icon}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="membership-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Users className="stat-icon" />
              <div className="stat-number">100+</div>
              <div className="stat-label">Miembros Activos</div>
            </div>
            <div className="stat-item">
              <Building className="stat-icon" />
              <div className="stat-number">50+</div>
              <div className="stat-label">Startups HealthTech</div>
            </div>
            <div className="stat-item">
              <Calendar className="stat-icon" />
              <div className="stat-number">20+</div>
              <div className="stat-label">Eventos al Año</div>
            </div>
            <div className="stat-item">
              <Network className="stat-icon" />
              <div className="stat-number">95%</div>
              <div className="stat-label">Tasa de Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="membership-cta-section">
        <div className="container">
          <div className="membership-cta-box">
            <h2>¿Listo para Unirte?</h2>
            <p>
              Completa el formulario de afiliación y comienza a disfrutar de todos los beneficios
            </p>
            <div className="cta-buttons">
              <button className="btn-membership-cta primary">
                Iniciar Proceso de Afiliación
              </button>
              <a href="/contacto" className="btn-membership-cta secondary">
                Contactar para Más Información
              </a>
            </div>
            <p className="cta-note">
              ¿Tienes preguntas? Escríbenos a <strong>membresia@healthtechperu.com</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
