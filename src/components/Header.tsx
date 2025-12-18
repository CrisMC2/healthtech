import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '/', type: 'link' },
    { name: 'Sobre Nosotros', path: '/#sobre-nosotros', type: 'scroll' },
    { name: 'Verticales', path: '/verticales', type: 'link' },
    { name: 'Eventos', path: '/eventos', type: 'link' },
    { name: 'Membresía', path: '/miembros', type: 'link' },
    { name: 'Contacto', path: '/contacto', type: 'link' },
  ];

  const handleScrollToSection = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.substring(2);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      } else {
        // Si la sección no existe en la página actual, navegar al inicio
        window.location.href = path;
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <div className="logo-icon">
              <Activity size={24} strokeWidth={2.5} />
            </div>
            <span className="logo-name">HealthTech Perú</span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="header-nav desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link"
                onClick={(e) => link.type === 'scroll' && handleScrollToSection(e, link.path)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-cta desktop-cta">
            <Link to="/miembros" className="btn-header-cta">
              Únete
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegación Móvil */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="mobile-nav-link"
                onClick={(e) => {
                  if (link.type === 'scroll') {
                    handleScrollToSection(e, link.path);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mobile-cta">
            <Link
              to="/miembros"
              className="btn-mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Únete al Ecosistema
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Header;
