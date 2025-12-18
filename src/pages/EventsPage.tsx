import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  GraduationCap,
  Coffee,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import './EventsPage.css';

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  mode: 'Presencial' | 'Virtual' | 'Híbrido';
  capacity: string;
  description: string;
  status: 'Próximo' | 'Inscripción Abierta' | 'Pasado';
  icon: React.ReactNode;
}

const EventsPage = () => {
  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Perú HealthTech Summit 2026',
      type: 'Evento Principal',
      date: '15 de Mayo, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Centro de Convenciones, Lima',
      mode: 'Híbrido',
      capacity: '500+ asistentes',
      description: 'El evento anual más importante del ecosistema HealthTech peruano. Conecta con emprendedores, inversionistas, reguladores y líderes de la industria.',
      status: 'Inscripción Abierta',
      icon: <Trophy />
    },
    {
      id: '2',
      title: 'Workshop: Regulatorio DIGEMID para Apps de Salud',
      type: 'Workshop',
      date: '20 de Febrero, 2026',
      time: '3:00 PM - 5:00 PM',
      location: 'Online - Zoom',
      mode: 'Virtual',
      capacity: '100 participantes',
      description: 'Aprende sobre los requisitos regulatorios de DIGEMID para aplicaciones móviles de salud y dispositivos médicos digitales.',
      status: 'Próximo',
      icon: <GraduationCap />
    },
    {
      id: '3',
      title: 'Noche de Networking HealthTech',
      type: 'Networking',
      date: '28 de Febrero, 2026',
      time: '6:30 PM - 9:00 PM',
      location: 'Hub de Innovación, San Isidro',
      mode: 'Presencial',
      capacity: '80 participantes',
      description: 'Evento mensual de networking para conectar con otros emprendedores, profesionales de salud e inversionistas del ecosistema.',
      status: 'Inscripción Abierta',
      icon: <Coffee />
    }
  ];

  const eventTypes = [
    {
      name: 'Perú HealthTech Summit',
      description: 'Evento anual flagship con conferencias, paneles y networking de alto nivel',
      frequency: 'Anual',
      icon: <Trophy />,
      color: '#00a651'
    },
    {
      name: 'Pitch Competitions',
      description: 'Competencias donde startups presentan sus soluciones ante inversionistas',
      frequency: 'Trimestral',
      icon: <Users />,
      color: '#00a651'
    },
    {
      name: 'Workshops Especializados',
      description: 'Capacitaciones sobre regulatorio, inversión, validación clínica y más',
      frequency: 'Mensual',
      icon: <GraduationCap />,
      color: '#00a651'
    },
    {
      name: 'Networking Nights',
      description: 'Encuentros informales para construir relaciones en el ecosistema',
      frequency: 'Mensual',
      icon: <Coffee />,
      color: '#00a651'
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1 className="events-title">Eventos HealthTech</h1>
          <p className="events-subtitle">
            Conecta, aprende y crece en el ecosistema de salud digital del Perú
          </p>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="upcoming-events-section">
        <div className="container">
          <div className="section-header">
            <Calendar className="section-icon" />
            <h2>Próximos Eventos</h2>
            <p>Inscríbete y no te pierdas las oportunidades de networking y aprendizaje</p>
          </div>

          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="event-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="event-header">
                  <div className="event-type-badge" style={{ backgroundColor: `${eventTypes.find(t => t.name.includes(event.type.split(' ')[0]))?.color || '#718096'}15` }}>
                    <div className="event-icon">
                      {event.icon}
                    </div>
                    <span>{event.type}</span>
                  </div>
                  <div className={`event-status-badge ${event.status === 'Inscripción Abierta' ? 'open' : ''}`}>
                    {event.status === 'Inscripción Abierta' && <CheckCircle size={16} />}
                    {event.status}
                  </div>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <Calendar size={18} />
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <Clock size={18} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <MapPin size={18} />
                    <span>{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <Users size={18} />
                    <span>{event.capacity}</span>
                  </div>
                </div>

                <div className="event-footer">
                  <span className="event-mode-tag">{event.mode}</span>
                  {event.status === 'Inscripción Abierta' && (
                    <button className="btn-register">
                      Inscribirse Ahora
                      <ArrowRight size={18} />
                    </button>
                  )}
                  {event.status === 'Próximo' && (
                    <button className="btn-register secondary">
                      Más Información
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="event-types-section">
        <div className="container">
          <div className="section-header">
            <h2>Tipos de Eventos</h2>
            <p>Variedad de formatos para diferentes necesidades del ecosistema</p>
          </div>

          <div className="event-types-grid">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="event-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="event-type-icon" style={{ backgroundColor: type.color }}>
                  {type.icon}
                </div>
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <div className="event-frequency">
                  <span>Frecuencia:</span> {type.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="event-benefits-section">
        <div className="container">
          <h2 className="benefits-title">¿Por Qué Asistir a Nuestros Eventos?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Networking Estratégico</h4>
              <p>Conecta con emprendedores, inversionistas, profesionales de salud y reguladores</p>
            </div>
            <div className="benefit-card">
              <h4>Conocimiento Especializado</h4>
              <p>Aprende sobre regulación, validación clínica, inversión y tendencias del sector</p>
            </div>
            <div className="benefit-card">
              <h4>Oportunidades de Negocio</h4>
              <p>Encuentra partners, clientes, inversionistas y oportunidades de colaboración</p>
            </div>
            <div className="benefit-card">
              <h4>Visibilidad</h4>
              <p>Presenta tu solución, participa en pitch competitions y gana reconocimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conviértete en Speaker */}
      <section className="speaker-section">
        <div className="container">
          <div className="speaker-box">
            <h2>¿Quieres ser Speaker en Nuestros Eventos?</h2>
            <p>
              Comparte tu experiencia y conocimiento con el ecosistema HealthTech.
              Estamos buscando expertos en innovación, regulación, inversión y casos de éxito.
            </p>
            <button className="btn-speaker">
              Postular como Speaker
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="events-cta-section">
        <div className="container">
          <div className="events-cta-box">
            <h2>Mantente Informado</h2>
            <p>
              Únete a nuestra comunidad y recibe notificaciones sobre próximos eventos,
              workshops y oportunidades de networking
            </p>
            <div className="cta-buttons">
              <a href="/miembros" className="btn-events-cta primary">
                Únete a la Asociación
                <ArrowRight size={20} />
              </a>
              <a href="/contacto" className="btn-events-cta secondary">
                Contactar Eventos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
