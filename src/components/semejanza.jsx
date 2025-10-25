import React from 'react';
import './ui/CompStyles.css';

const images = import.meta.glob('../assets/imgGestalt/semejanza/*.{jpg,jpeg,png,svg}', { 
  eager: true,
  import: 'default'
});

function Semejanza() {
    const semejanzaInfo = {
        titulo: 'Semejanza',
        desc: 'Es el principio por el cual percibimos como parte de un mismo grupo aquellos elementos que comparten características visuales similares, como color, forma, tamaño, orientación o textura.',
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
                                <h1>{semejanzaInfo.titulo}</h1>
                                <p>{semejanzaInfo.desc}</p>
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

export default Semejanza;