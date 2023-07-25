import React, { useState, useEffect } from 'react';
import './CustomCarousel.css'; // Create this CSS file for custom styling

export const CustomCarousel = () => {
  const [itemsToShow, setItemsToShow] = useState(3); // Default number of items to show
  const [activeIndex, setActiveIndex] = useState(0);

  // Replace this array with your carousel items.
  const carouselItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    // Adjust the number of items to show based on screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setItemsToShow(1);
      } else if (screenWidth <= 1024) {
        setItemsToShow(1);
      } else {
        setItemsToShow(1); // Default number of items to show for larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the default number of items

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="custom-carousel-container">
      <div className="carousel-items-container">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ width: "200px", height: "200px" }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="custom-navigation">
        <div className="custom-prev-arrow" onClick={handlePrevSlide}>
          &lt;
        </div>
        <div className="custom-next-arrow" onClick={handleNextSlide}>
          &gt;
        </div>
      </div>
      <div className="custom-pagination">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
