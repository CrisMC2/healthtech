import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('Gracias por contactarnos. Te responderemos pronto.');
  };

  const contactChannels = [
    {
      icon: <Mail />,
      title: 'Email General',
      value: 'info@healthtechperu.com',
      description: 'Consultas generales y preguntas',
      color: '#00a651',
    },
    {
      icon: <Mail />,
      title: 'Afiliaciones',
      value: 'membresia@healthtechperu.com',
      description: 'Información sobre membresías',
      color: '#00a651',
    },
    {
      icon: <Mail />,
      title: 'Alianzas Estratégicas',
      value: 'alianzas@healthtechperu.com',
      description: 'Partnerships y colaboraciones',
      color: '#00a651',
    },
    {
      icon: <Phone />,
      title: 'Teléfono',
      value: '+51 999 999 999',
      description: 'Lunes a Viernes, 9am - 6pm',
      color: '#00a651',
    },
  ];

  const socialMedia = [
    {
      name: 'LinkedIn',
      icon: <Linkedin />,
      url: 'https://linkedin.com/company/healthtech-peru',
      color: '#0077b5',
      description: 'Noticias profesionales del sector',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://instagram.com/healthtechperu',
      color: '#E4405F',
      description: 'Contenido visual e historias',
    },
    {
      name: 'Twitter/X',
      icon: <Twitter />,
      url: 'https://twitter.com/healthtechpe',
      color: '#1DA1F2',
      description: 'Actualizaciones en tiempo real',
    },
    {
      name: 'YouTube',
      icon: <Youtube />,
      url: 'https://youtube.com/@healthtechperu',
      color: '#FF0000',
      description: 'Webinars y conferencias',
    },
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: 'https://facebook.com/healthtechperu',
      color: '#1877F2',
      description: 'Comunidad y eventos',
    },
  ];

  const offices = [
    {
      name: 'Oficina Principal',
      address: 'San Isidro, Lima, Perú',
      icon: <MapPin />,
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contáctanos</h1>
          <p className="contact-subtitle">
            Estamos aquí para responder tus preguntas y ayudarte a formar parte del ecosistema
            HealthTech
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="contact-channels-section">
        <div className="container">
          <div className="section-header">
            <MessageSquare className="section-icon" />
            <h2>Canales de Comunicación</h2>
            <p>Elige el canal que mejor se adapte a tus necesidades</p>
          </div>

          <div className="channels-grid">
            {contactChannels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-icon" style={{ backgroundColor: `${channel.color}15` }}>
                  <div style={{ color: channel.color }}>{channel.icon}</div>
                </div>
                <h3>{channel.title}</h3>
                <a
                  href={
                    channel.icon.type === Mail ? `mailto:${channel.value}` : `tel:${channel.value}`
                  }
                  className="channel-value"
                  style={{ color: channel.color }}
                >
                  {channel.value}
                </a>
                <p className="channel-description">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Envíanos un Mensaje</h2>
              <p>Completa el formulario y te responderemos en menos de 24 horas</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Asunto *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="membresia">Membresía</option>
                    <option value="eventos">Eventos</option>
                    <option value="alianzas">Alianzas Estratégicas</option>
                    <option value="academia">Academia HealthTech</option>
                    <option value="general">Consulta General</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media-section">
        <div className="container">
          <h2 className="social-title">Síguenos en Redes Sociales</h2>
          <p className="social-subtitle">
            Mantente al día con las últimas noticias, eventos y tendencias del ecosistema HealthTech
          </p>

          <div className="social-grid">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon" style={{ backgroundColor: social.color }}>
                  {social.icon}
                </div>
                <h4>{social.name}</h4>
                <p>{social.description}</p>
              </a>
            ))}
          </div>

          <div className="linkedin-priority">
            <Linkedin size={24} />
            <p>
              <strong>LinkedIn</strong> es nuestro canal prioritario para contenido profesional y
              B2B
            </p>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="office-section">
        <div className="container">
          <h2 className="office-title">Nuestra Ubicación</h2>
          <div className="office-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-icon">{office.icon}</div>
                <h4>{office.name}</h4>
                <p>{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-box">
            <h2>¿Listo para Unirte al Ecosistema?</h2>
            <p>Descubre cómo ser parte de la transformación digital de la salud en el Perú</p>
            <a href="/miembros" className="btn-contact-cta">
              Conoce las Membresías
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
