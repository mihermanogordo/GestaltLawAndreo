import React from 'react';
import './ui/CompStyles.css';

const images = import.meta.glob('../assets/imgGestalt/direccion/*.{jpg,jpeg,png,svg}', { 
  eager: true,
  import: 'default'
});


function Direccion() {
    const direccionInfo = {
        titulo: 'Dirección',
        desc: 'La dirección es un principio visual que se refiere a la forma en que los elementos guían la mirada del espectador a través de una composición. Esto puede lograrse mediante líneas, formas o la disposición de los elementos.',
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
                                <h1>{direccionInfo.titulo}</h1>
                                <p>{direccionInfo.desc}</p>
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

export default Direccion;