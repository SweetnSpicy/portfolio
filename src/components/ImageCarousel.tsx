import React, { useState, useEffect } from 'react';
import './ImageCarousel.scss'

// 1. Define the shape of a single image object
interface ImageItem {
  url: string;
  alt: string;
}

// 2. Define the props for the component
interface ImageCarouselProps {
  images: ImageItem[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false); // New state for pausing
    const autoPlayTime = 5000;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
    };

    // --- Auto-play Logic with Pause Check ---
    useEffect(() => {
        // Only set the interval if NOT paused
        if (!isPaused) {
            const timer = setInterval(() => {
                goToNext();
            }, autoPlayTime);

            return () => clearInterval(timer);
        }
    }, [currentIndex, isPaused]); // Now depends on isPaused too

    // Add a safety check in case images haven't loaded yet
    if (!images || images.length === 0) {
        return <div>No images found.</div>;
    }

    return (
        <div>
            <div
                className="gallery-container"
                onMouseEnter={() => setIsPaused(true)}  // Pause on hover
                onMouseLeave={() => setIsPaused(false)} // Resume on leave
            >
                <div className="carousel">
                    <button className="nav-btn left-arrow" onClick={goToPrevious}>&#10094;</button>

                    <div
                        className="slide"
                        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
                    ></div>

                    <button className="nav-btn right-arrow" onClick={goToNext}>&#10095;</button>
                </div>

                <div className="dots-container">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;