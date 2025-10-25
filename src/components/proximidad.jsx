import React from 'react';
import './ui/CompStyles.css';

const images = import.meta.glob('../assets/imgGestalt/proximidad/*.{jpg,jpeg,png,svg}', { 
  eager: true,
  import: 'default'
});


function Proximidad() {
    const proximidadInfo = {
        titulo: 'Proximidad',
        desc: 'Explica cómo percibimos como un conjunto a los elementos visuales que están físicamente cercanos, y es utilizada para agrupar información, crear jerarquías visuales y guiar al espectador.',
    };


 const imageArray = Object.entries(images).map(([path, module]) => ({
        name: path.split('/').pop().split('.')[0],
        src: module
    }));
    return (
        <div className="gestalt-container-with-grid">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="gestalt-header">
                            <div className="gestalt-content">
                                <h1>{proximidadInfo.titulo}</h1>
                                <p>{proximidadInfo.desc}</p>
                            </div>
                        </div>

                        <div className="gestalt-slider-container">
                            <div className="gestalt-slider">
                                {imageArray.map((image, index) => (
                                    <div key={image.name} className="gestalt-slide">
                                        <div className="gestalt-image-card">
                                            <img src={image.src} alt={`Imagen ${index + 1}`} />
                                            <div className="image-number">{index + 1}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proximidad;