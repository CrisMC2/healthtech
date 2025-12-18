import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Send } from 'lucide-react';
import formService from '../services/formService';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formService.validateEmail(email)) {
      setMessage('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await formService.subscribeToNewsletter({ email });
      setMessage(result.message);
      setEmail('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Error al suscribirse');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Columna 1: Logo y Descripción */}
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <span className="footer-logo-text">H</span>
              </div>
              <span className="footer-logo-name">HealthTech Perú</span>
            </Link>
            <p className="footer-description">
              Impulsando la transformación digital de la salud en Perú mediante la articulación del
              ecosistema de tecnología aplicada a la salud.
            </p>
            <div className="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contacto@healthtechperu.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-column">
            <h3 className="footer-heading">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/ecosistema">Ecosistema</Link>
              </li>
              <li>
                <Link to="/directorio">Directorio</Link>
              </li>
              <li>
                <Link to="/eventos">Eventos</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div className="footer-column">
            <h3 className="footer-heading">Recursos</h3>
            <ul className="footer-links">
              <li>
                <Link to="/sobre-nosotros">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/afiliacion">Únete</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/recursos">Guías y Herramientas</Link>
              </li>
              <li>
                <Link to="/prensa">Prensa</Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-newsletter-text">
              Recibe las últimas noticias del ecosistema HealthTech
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="newsletter-button"
                  disabled={isSubmitting}
                  aria-label="Suscribirse"
                >
                  <Send size={18} />
                </button>
              </div>
              {message && (
                <p
                  className={`newsletter-message ${message.includes('Error') ? 'error' : 'success'}`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} HealthTech Perú. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <Link to="/privacidad">Política de Privacidad</Link>
            <span className="separator">•</span>
            <Link to="/terminos">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
