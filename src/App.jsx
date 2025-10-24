import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  const menuItems = [
    { label: 'Figura', link: '/figura' },
    { label: 'Proximidad', link: '/proximidad' },
    { label: 'Semejanza', link: '/semejanza' },
    { label: 'Simetria', link: '/simetria' },
    { label: 'Conexion', link: '/conexion' },
    { label: 'Direccion', link: '/direccion' },
    { label: 'Cierre', link: '/cierre' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <Router>
      <div className="relative w-screen h-screen ">
        
        {/* RUTAS */}
        <Routes>
          {/* Página de inicio */}
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
                <div className="me-6 ms-8 bg-black/20 backdrop-blur-lg rounded-2xl p-[90px]">
                  <h1 className="font-jakarta text-[#56A6D8] text-center">
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
          
          {/* Otras páginas */}
          <Route path="/cierre" element={<Cierre />} />
          <Route path="/figura" element={<Figura />} />
          <Route path="/proximidad" element={<Proximidad />} />
          <Route path="/simetria" element={<Simetria />} />
          <Route path="/conexion" element={<Conexion />} />
          <Route path="/direccion" element={<Direccion />} />
          <Route path="/semejanza" element={<Semejanza />} />
        </Routes>

        <div className="fixed inset-0 z-50">
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
            accentColor="#ff6b6b"
            isFixed={true}
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;