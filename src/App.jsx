import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import GridDistortion from './components/GridDistortion';
import caballitoImg from './assets/caballito.jpg';
import StaggeredMenu from './components/ui/headerMenu.jsx';
import Cierre from './components/cierre';
import Figura from './components/figuraFondo';
import Direccion from './components/DireccionCompartida';
import Proximidad from './components/proximidad';
import Semejanza from './components/semejanza';
import Simetria from './components/simetriaOrden';
import Conexion from './components/ConexionUniforme';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: 'Figura', link: '/figura' },
    { label: 'Proximidad', link: '/proximidad' },
    { label: 'Semejanza', link: '/semejanza' },
    { label: 'Simetria', link: '/simetria' },
    { label: 'Conexion', link: '/conexion' },
    { label: 'Direccion', link: '/direccion' },
    { label: 'Cierre', link: '/cierre' },
    { label: 'Home', link: '/' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  useEffect(() => {
    const checkMenuState = () => {
      if (menuRef.current) {
        const menuElement = menuRef.current.querySelector('[class*="menu"], [class*="Menu"]');
        if (menuElement) {
          const isOpen = Array.from(menuElement.classList).some(className => 
            className.includes('open') || 
            className.includes('active') || 
            className.includes('expanded') ||
            className.includes('opened')
          );
          setIsMenuOpen(isOpen);
        }
      }
    };

    const observer = new MutationObserver(checkMenuState);
    if (menuRef.current) {
      observer.observe(menuRef.current, { 
        attributes: true, 
        attributeFilter: ['class'],
        subtree: true 
      });
      checkMenuState();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="relative w-screen h-screen">
        <Routes>
          <Route path="/" element={
            <div className="fixed w-full h-full top-0 left-0 overflow-hidden">
              <div className="absolute inset-0 bg-blue-500 z-10" />
              <GridDistortion
                grid={25}
                mouse={0.2}
                strength={0.15}
                relaxation={0.95}
                imageSrc={caballitoImg}
              />
              <div className="fixed top-0 left-20 z-20 flex items-center">
                <div className="me-6 ms-8 rounded-2xl p-[90px]">
                  <h1 className="font-jakarta text-[#56A6D8] text-center font-light tracking-wide">
                    Proyecto para probar las <br /> leyes de la Gestalt
                  </h1>
                  <p className="font-jakarta text-[18px] text-white text-center text-sm p-20 mt-4 opacity-60">
                    Maria Andreo - DAW <br />
                    Monlau 
                  </p>
                </div>
              </div>
            </div>
          } />
          
          <Route path="/cierre" element={<Cierre />} />
          <Route path="/figura" element={<Figura />} />
          <Route path="/proximidad" element={<Proximidad />} />
          <Route path="/simetria" element={<Simetria />} />
          <Route path="/conexion" element={<Conexion />} />
          <Route path="/direccion" element={<Direccion />} />
          <Route path="/semejanza" element={<Semejanza />} />
        </Routes>

        <div 
          ref={menuRef} 
          className={`fixed inset-0 z-50 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >

          <div ref={menuRef} className="fixed top-4 right-4 z-50">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#56A6D8"
              openMenuButtonColor="#56A6D8"
              changeMenuColorOnOpen={true}
              colors={['#300407', '#5227FF']}
              accentColor="#300407"
              isFixed={true} 
    onMenuOpen={() => setIsMenuOpen(true)}
    onMenuClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;