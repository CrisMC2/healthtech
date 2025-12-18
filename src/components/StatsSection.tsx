import { useState, useEffect, useRef, useCallback } from 'react';
import { Building2, Users, Heart, TrendingUp, Award, Zap } from 'lucide-react';
import './StatsSection.css';

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const stats: Stat[] = [
    {
      id: 'companies',
      icon: <Building2 size={32} />,
      value: 50,
      suffix: '+',
      label: 'Empresas',
      description: 'Startups y empresas registradas',
      color: 'var(--color-primary)',
    },
    {
      id: 'professionals',
      icon: <Users size={32} />,
      value: 200,
      suffix: '+',
      label: 'Profesionales',
      description: 'Expertos en HealthTech',
      color: 'var(--color-secondary)',
    },
    {
      id: 'patients',
      icon: <Heart size={32} />,
      value: 1,
      suffix: 'M+',
      label: 'Pacientes',
      description: 'Beneficiados con tecnología',
      color: 'var(--color-accent)',
    },
    {
      id: 'investment',
      icon: <TrendingUp size={32} />,
      value: 10,
      suffix: 'M+',
      label: 'Inversión',
      description: 'USD en financiamiento',
      color: 'var(--color-primary-dark)',
    },
    {
      id: 'awards',
      icon: <Award size={32} />,
      value: 15,
      suffix: '+',
      label: 'Premios',
      description: 'Reconocimientos internacionales',
      color: 'var(--color-accent)',
    },
    {
      id: 'events',
      icon: <Zap size={32} />,
      value: 30,
      suffix: '+',
      label: 'Eventos',
      description: 'Anuales de networking',
      color: 'var(--color-secondary)',
    },
  ];

  const animateCounters = useCallback(() => {
    stats.forEach((stat) => {
      let currentCount = 0;
      const increment = stat.value / 50; // 50 frames
      const duration = 2000; // 2 seconds
      const stepTime = duration / 50;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => ({
          ...prev,
          [stat.id]: Math.floor(currentCount),
        }));
      }, stepTime);
    });
  }, [stats]);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animateCounters]);

  return (
    <section className="stats-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="stats-background">
        <div className="stats-shape stats-shape-1"></div>
        <div className="stats-shape stats-shape-2"></div>
      </div>

      <div className="stats-container">
        <div className={`stats-header ${isVisible ? 'visible' : ''}`}>
          <span className="stats-badge">Impacto</span>
          <h2 className="stats-title">
            Transformando la salud con
            <span className="stats-title-gradient"> resultados medibles</span>
          </h2>
          <p className="stats-description">
            Nuestro ecosistema está generando un impacto real en el sector salud del Perú
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-value">
                {counts[stat.id] || 0}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
              <div className="stat-glow" style={{ background: stat.color }}></div>
            </div>
          ))}
        </div>

        <div className={`stats-footer ${isVisible ? 'visible' : ''}`}>
          <p className="stats-footer-text">
            Datos actualizados a {new Date().getFullYear()} · Crecimiento anual del 40%
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
