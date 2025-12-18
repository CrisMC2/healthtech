import { Users, Target, Heart, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Sobre Nosotros</h1>
          <p className="about-subtitle">
            Transformando la salud en el Perú a través de la innovación digital
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="about-section history-section">
        <div className="container">
          <div className="section-header">
            <Heart className="section-icon" />
            <h2>Nuestra Historia</h2>
          </div>
          <div className="history-content">
            <p>
              La Asociación HealthTech del Perú nace de la necesidad de unir y fortalecer el ecosistema
              de tecnología en salud del país. Fundada en 2025, somos la primera asociación dedicada
              exclusivamente a promover la innovación digital en el sector salud peruano.
            </p>
            <p>
              En un contexto donde la transformación digital de la salud se vuelve cada vez más crucial,
              nuestra asociación surge para ser el puente entre startups, instituciones de salud,
              reguladores, inversionistas y todos los actores del ecosistema HealthTech.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="about-section mvv-section">
        <div className="container">
          <div className="mvv-grid">
            {/* Misión */}
            <div className="mvv-card">
              <div className="mvv-icon-wrapper">
                <Target className="mvv-icon" />
              </div>
              <h3>Misión</h3>
              <p>
                Impulsar el desarrollo y adopción de soluciones de tecnología en salud en el Perú,
                facilitando la colaboración entre emprendedores, instituciones y reguladores para
                mejorar el acceso y calidad de los servicios de salud.
              </p>
            </div>

            {/* Visión */}
            <div className="mvv-card">
              <div className="mvv-icon-wrapper">
                <Lightbulb className="mvv-icon" />
              </div>
              <h3>Visión</h3>
              <p>
                Ser el referente líder en el ecosistema HealthTech del Perú y la región, reconocidos
                por promover la innovación responsable, la excelencia regulatoria y la transformación
                digital del sector salud.
              </p>
            </div>

            {/* Valores */}
            <div className="mvv-card">
              <div className="mvv-icon-wrapper">
                <Shield className="mvv-icon" />
              </div>
              <h3>Valores</h3>
              <ul className="values-list">
                <li><strong>Innovación:</strong> Promovemos el desarrollo de soluciones disruptivas</li>
                <li><strong>Colaboración:</strong> Fomentamos la cooperación entre todos los actores</li>
                <li><strong>Integridad:</strong> Actuamos con transparencia y ética profesional</li>
                <li><strong>Excelencia:</strong> Buscamos los más altos estándares de calidad</li>
                <li><strong>Impacto Social:</strong> Priorizamos mejorar el acceso a la salud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="about-section objectives-section">
        <div className="container">
          <div className="section-header">
            <TrendingUp className="section-icon" />
            <h2>Nuestros Objetivos</h2>
          </div>
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-number">01</div>
              <h4>Articular el Ecosistema</h4>
              <p>
                Conectar startups, hospitales, inversionistas, academia y gobierno para crear
                sinergias y oportunidades de colaboración.
              </p>
            </div>
            <div className="objective-card">
              <div className="objective-number">02</div>
              <h4>Facilitar el Marco Regulatorio</h4>
              <p>
                Proveer guías y recursos para navegar la regulación sanitaria (DIGEMID, MINSA)
                y protección de datos en salud.
              </p>
            </div>
            <div className="objective-card">
              <div className="objective-number">03</div>
              <h4>Promover la Educación</h4>
              <p>
                Ofrecer capacitación especializada en HealthTech a través de nuestra academia,
                webinars y recursos educativos.
              </p>
            </div>
            <div className="objective-card">
              <div className="objective-number">04</div>
              <h4>Impulsar la Inversión</h4>
              <p>
                Conectar emprendimientos con inversionistas y facilitar el acceso a capital
                para escalar soluciones de salud digital.
              </p>
            </div>
            <div className="objective-card">
              <div className="objective-number">05</div>
              <h4>Generar Conocimiento</h4>
              <p>
                Producir reportes, estudios y análisis sobre el estado del HealthTech en Perú
                y tendencias globales del sector.
              </p>
            </div>
            <div className="objective-card">
              <div className="objective-number">06</div>
              <h4>Fomentar la Validación Clínica</h4>
              <p>
                Apoyar en la validación de soluciones digitales con metodologías y conexiones
                con instituciones de salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué unirse */}
      <section className="about-section why-join-section">
        <div className="container">
          <div className="section-header">
            <Users className="section-icon" />
            <h2>¿Por Qué Unirse al Ecosistema HealthTech?</h2>
          </div>
          <div className="why-join-content">
            <div className="why-join-grid">
              <div className="why-card">
                <h4>Networking Especializado</h4>
                <p>
                  Accede a una red exclusiva de emprendedores, profesionales de la salud,
                  inversionistas y tomadores de decisión del sector.
                </p>
              </div>
              <div className="why-card">
                <h4>Conocimiento Regulatorio</h4>
                <p>
                  Obtén acceso a guías, templates y asesoría sobre compliance sanitario,
                  protección de datos y certificaciones necesarias.
                </p>
              </div>
              <div className="why-card">
                <h4>Visibilidad y Credibilidad</h4>
                <p>
                  Posiciona tu solución en el directorio oficial, participa en eventos
                  destacados y gana reconocimiento en el ecosistema.
                </p>
              </div>
              <div className="why-card">
                <h4>Acceso a Oportunidades</h4>
                <p>
                  Conecta con hospitales para pilotos, participa en licitaciones,
                  accede a programas de financiamiento y aceleración.
                </p>
              </div>
              <div className="why-card">
                <h4>Formación Continua</h4>
                <p>
                  Participa en la Academia HealthTech con cursos especializados,
                  workshops y certificaciones reconocidas en el sector.
                </p>
              </div>
              <div className="why-card">
                <h4>Impacto Social</h4>
                <p>
                  Forma parte de un movimiento que busca democratizar el acceso
                  a servicios de salud de calidad en todo el Perú.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directiva */}
      <section className="about-section board-section">
        <div className="container">
          <div className="section-header">
            <Users className="section-icon" />
            <h2>Directiva Actual</h2>
          </div>
          <p className="board-intro">
            Nuestra directiva está conformada por líderes del ecosistema HealthTech peruano,
            con experiencia en emprendimiento, salud, tecnología e inversión.
          </p>
          <div className="board-note">
            <p><em>La conformación de la directiva se actualizará próximamente.</em></p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <h2>Únete a HealthTech Perú</h2>
            <p>
              Forma parte del ecosistema que está transformando la salud digital en el Perú
            </p>
            <a href="/miembros" className="btn-about-cta">
              Conoce los Beneficios de Membresía
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
