import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = ({ images }) => {
  useEffect(() => {
    const adjustImageSizes = () => {
      const imageElements = document.querySelectorAll('.pic-frame img');
      const maxPercentage = 30;

      imageElements.forEach((img) => {
        if (img.naturalHeight > img.naturalWidth) {
          if (img.naturalHeight > maxPercentage || img.naturalWidth > maxPercentage) {
            img.parentElement.style.width = '30%';
            img.parentElement.style.height = '30%';
          }
          if(window.innerWidth < 770 && window.innerWidth > 700) {
            img.parentElement.style.width = '10%';
            img.parentElement.style.height = '10%';
          }
          if( img.naturalHeight > maxPercentage && window.innerWidth < 425) {
            img.parentElement.style.width = '50%';
            img.parentElement.style.height = '50%';

          } else {
            img.parentElement.style.width = 'auto';
            img.parentElement.style.height = 'auto';
          }
        } else {
          img.parentElement.style.width = '100%';
        }
      });
    };

    setTimeout(adjustImageSizes, 0);
  }, [images]);

  return (
    <div className="slide-container">
      <Slide images={images}>
        {images.map((image, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <div className="pic-frame">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
