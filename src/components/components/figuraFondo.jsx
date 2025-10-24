import React from 'react';

// Vite glob import
const images = import.meta.glob('../assets/imgGestalt/*.{jpg,jpeg,png,svg}', { 
  eager: true,
  import: 'default'
});

// Convertir a objeto con nombres de archivo
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop().split('.')[0]; // 'imagen1' de '../assets/imgGestalt/imagen1.jpg'
    return [fileName, module];
  })
);

function Cierre() {
    const cierreInfo = {
        titulo: 'Cierre',
        desc: 'Establece que nuestro cerebro completa las formas que están incompletas.',
    };

    // Convertir el objeto de imágenes a array
    const imageArray = Object.values(images);

    return (
        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-800 flex items-center justify-center relative">
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 max-w-md z-10">
                <h1 className="font-jakarta text-[#56A6D8] text-center text-3xl mb-4">
                    {cierreInfo.titulo}
                </h1>
                <p className="font-jakarta text-white text-center text-lg">
                    {cierreInfo.desc}
                </p>
            </div>
            
            {/* Imágenes decorativas */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
           
           
                  <img src={imageMap.imagen1} alt="Imagen 1 específica" />
            <img src={imageMap.imagen2} alt="Imagen 2 específica" />
            </div>

            <div className="absolute bottom-4 text-white text-sm opacity-60 z-10">
                2024 Maria Andreo - DAW Monlau
            </div>
        </div>
    );
}

export default Cierre;