import React from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

const Gallery = ({ data }) => {
  const { portfolio } = data;
  const images = portfolio.projects.map(item => item.image);
  if (!images || images.length === 0) return null;

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="row">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {images.map((image, index) => (
              <Fade key={index} bottom>
                <div className="gallery-item">
                  <Zmage
                    src={`images/${image}`}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
