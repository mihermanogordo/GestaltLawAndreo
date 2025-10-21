import GridDistortion from './components/GridDistortion';
import caballitoImg from './assets/caballito.jpg';
import StaggeredMenu from './components/ui/headerMenu.jsx';

function App() {
  const menuItems = [
    { label: 'Figura', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Proximidad', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Semejanza', ariaLabel: 'View our services', link: '/services' },
    { label: 'Simetria', ariaLabel: 'Get in touch', link: '/contact' },
    { label: 'Conexion', ariaLabel: 'Get in touch', link: '/contact' },
    { label: 'Direccion', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    // QUITA el overflow-hidden del contenedor principal
    <div className="relative w-screen h-screen">
      {/* GridDistortion - fondo fijo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-blue-500" />
        <GridDistortion
          grid={25}
          mouse={0.2}
          strength={0.15}
          relaxation={0.95}
          imageSrc={caballitoImg}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-white text-6xl font-bold text-center w-full">
            Proyecto para probar las leyes de la Gestalt
          </h1>
          <p className="text-white text-2xl mt-4 text-center w-full">
            Maria Andreo - DAW
          </p>
        </div>
      </div>

      {/* Menú - fijo en la pantalla */}
      <div className="fixed inset-0 z-50 pointer-events-none">
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
  );
}

export default App;