import GridDistortion from './components/GridDistortion';
import caballitoImg from './assets/caballito.jpg';

function App() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];
  return (
    <div
      className="relative w-[100vw] h-[100vh] overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}
    >
      {/* Fondo de respaldo */}
      <div className="absolute inset-0 bg-blue-500" />

      {/* Componente de distorsión */}
      <GridDistortion
        grid={25}
        mouse={0.2}
        strength={0.15}
        relaxation={0.95}
        imageSrc={caballitoImg}
      />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-white text-6xl font-bold text-center">
          Proyecto para probar las leyes de la Gestalt
        </h1>
        <p className="text-white text-2xl mt-4 text-center">
          Maria Andreo - DAW
        </p>
      </div>

      <div style={{ height: '100vh', background: '#1a1a1a' }}>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
    </div>
  );
}

export default App;