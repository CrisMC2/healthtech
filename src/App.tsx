import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy loading de páginas para optimizar el rendimiento
const HomePage = lazy(() => import('./pages/HomePage'));
const VerticalesPage = lazy(() => import('./pages/VerticalesPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const MembershipPage = lazy(() => import('./pages/MembershipPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Componente de carga mientras se cargan las páginas
const LoadingFallback = () => (
  <div
    className="loading-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      fontSize: '1.2rem',
      color: '#666',
    }}
  >
    <div className="loading-spinner">Cargando...</div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Fase 1 - MVP: Rutas principales (Nosotros integrado en Inicio) */}
              <Route path="/verticales" element={<VerticalesPage />} />
              <Route path="/eventos" element={<EventsPage />} />
              <Route path="/miembros" element={<MembershipPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route
                path="*"
                element={<div className="page-placeholder">Página no encontrada</div>}
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
