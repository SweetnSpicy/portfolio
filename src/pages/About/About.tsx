import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CaullyLogo from '@assets/CaullyLogo.png';
import FredLogo from '@assets/FredLogo.png';

export default function About() {
   const containerRef = useRef(null);
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [isCrumbling, setIsCrumbling] = useState(false);
  const [preloadPage, setPreloadPage] = useState(null);

  useEffect(() => {
    if (containerRef.current) {
      const width = window.innerWidth * 0.5;
      containerRef.current.scrollLeft = width;
    }
  }, []);

  const scrollToSection = (position) => {
    if (containerRef.current) {
      const width = window.innerWidth * 0.5;
      containerRef.current.scrollTo({
        left: width * position,
        behavior: 'smooth'
      });
      setCurrentSection(position);
    }
  };

  useEffect(() => {
    if (currentSection === 0 || currentSection === 2) {
      const timer = setTimeout(() => {
        // Preload the destination page
        if (currentSection === 0) {
          setPreloadPage('/CaullyHome');
        } else if (currentSection === 2) {
          setPreloadPage('/FredHome');
        }
        
        setIsCrumbling(true);
        
        // Navigate after crumble animation completes
        setTimeout(() => {
          if (currentSection === 0) {
            navigate('/CaullyHome');
          } else if (currentSection === 2) {
            navigate('/FredHome');
          }
        }, 1500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentSection, navigate]);

  return (
    <div className="h-screen overflow-hidden relative">
      <style>{`
        @keyframes crumble {
          0% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          10% {
            clip-path: polygon(
              0 0, 15% 2%, 30% 0, 45% 3%, 60% 1%, 75% 2%, 90% 0, 100% 0,
              100% 15%, 98% 30%, 100% 45%, 97% 60%, 99% 75%, 98% 90%, 100% 100%,
              90% 98%, 75% 100%, 60% 97%, 45% 99%, 30% 98%, 15% 100%, 0 100%,
              0 90%, 2% 75%, 0 60%, 3% 45%, 1% 30%, 2% 15%
            );
          }
          20% {
            clip-path: polygon(
              3% 3%, 18% 5%, 33% 3%, 48% 6%, 63% 4%, 78% 5%, 93% 3%, 97% 3%,
              97% 18%, 95% 33%, 97% 48%, 94% 63%, 96% 78%, 95% 93%, 97% 97%,
              93% 95%, 78% 97%, 63% 94%, 48% 96%, 33% 95%, 18% 97%, 3% 97%,
              3% 93%, 5% 78%, 3% 63%, 6% 48%, 4% 33%, 5% 18%
            );
          }
          30% {
            clip-path: polygon(
              6% 6%, 21% 9%, 36% 7%, 51% 10%, 66% 8%, 81% 9%, 94% 7%, 94% 7%,
              94% 21%, 92% 36%, 94% 51%, 91% 66%, 93% 81%, 92% 94%, 94% 94%,
              94% 92%, 81% 94%, 66% 91%, 51% 93%, 36% 92%, 21% 94%, 6% 94%,
              6% 94%, 9% 81%, 7% 66%, 10% 51%, 8% 36%, 9% 21%
            );
          }
          40% {
            clip-path: polygon(
              10% 10%, 25% 13%, 40% 11%, 55% 14%, 70% 12%, 83% 13%, 90% 11%, 90% 11%,
              90% 25%, 88% 40%, 90% 55%, 87% 70%, 89% 83%, 88% 90%, 90% 90%,
              90% 88%, 83% 90%, 70% 87%, 55% 89%, 40% 88%, 25% 90%, 10% 90%,
              10% 90%, 13% 83%, 11% 70%, 14% 55%, 12% 40%, 13% 25%
            );
          }
          50% {
            clip-path: polygon(
              15% 15%, 30% 18%, 45% 16%, 60% 19%, 73% 17%, 83% 18%, 85% 16%, 85% 16%,
              85% 30%, 83% 45%, 85% 60%, 82% 73%, 84% 83%, 83% 85%, 85% 85%,
              85% 83%, 83% 85%, 73% 82%, 60% 84%, 45% 83%, 30% 85%, 15% 85%,
              15% 85%, 18% 83%, 16% 73%, 19% 60%, 17% 45%, 18% 30%
            );
          }
          60% {
            clip-path: polygon(
              20% 20%, 35% 23%, 50% 21%, 63% 24%, 73% 22%, 80% 23%, 80% 21%, 80% 21%,
              80% 35%, 78% 50%, 80% 63%, 77% 73%, 79% 80%, 78% 80%, 80% 80%,
              80% 78%, 80% 80%, 73% 77%, 63% 79%, 50% 78%, 35% 80%, 20% 80%,
              20% 80%, 23% 80%, 21% 73%, 24% 63%, 22% 50%, 23% 35%
            );
          }
          70% {
            clip-path: polygon(
              26% 26%, 40% 29%, 52% 27%, 63% 30%, 70% 28%, 74% 29%, 74% 27%, 74% 27%,
              74% 40%, 72% 52%, 74% 63%, 71% 70%, 73% 74%, 72% 74%, 74% 74%,
              74% 72%, 74% 74%, 70% 71%, 63% 73%, 52% 72%, 40% 74%, 26% 74%,
              26% 74%, 29% 74%, 27% 70%, 30% 63%, 28% 52%, 29% 40%
            );
          }
          80% {
            clip-path: polygon(
              33% 33%, 44% 36%, 52% 34%, 60% 37%, 66% 35%, 68% 36%, 68% 34%, 68% 34%,
              68% 44%, 66% 52%, 68% 60%, 65% 66%, 67% 68%, 66% 68%, 68% 68%,
              68% 66%, 68% 68%, 66% 65%, 60% 67%, 52% 66%, 44% 68%, 33% 68%,
              33% 68%, 36% 68%, 34% 66%, 37% 60%, 35% 52%, 36% 44%
            );
          }
          90% {
            clip-path: polygon(
              40% 40%, 47% 43%, 52% 41%, 57% 44%, 61% 42%, 62% 43%, 62% 41%, 62% 41%,
              62% 47%, 60% 52%, 62% 57%, 59% 61%, 61% 62%, 60% 62%, 62% 62%,
              62% 60%, 62% 62%, 61% 59%, 57% 61%, 52% 60%, 47% 62%, 40% 62%,
              40% 62%, 43% 62%, 41% 61%, 44% 57%, 42% 52%, 43% 47%
            );
          }
          100% {
            clip-path: polygon(
              48% 48%, 50% 49%, 52% 48%, 52% 51%, 52% 49%, 51% 50%, 51% 48%, 51% 48%,
              51% 50%, 49% 52%, 51% 52%, 48% 52%, 50% 51%, 49% 51%, 51% 51%,
              51% 49%, 51% 51%, 52% 48%, 52% 50%, 52% 49%, 50% 51%, 48% 51%,
              48% 51%, 49% 51%, 48% 52%, 51% 52%, 49% 52%, 50% 50%
            );
          }
        }

        .crumble-container {
          animation: crumble 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .preview-page {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Preview of destination page underneath */}
      {preloadPage && (
        <div className="fixed inset-0 z-40 preview-page">
          <iframe
            src={preloadPage}
            className="w-full h-full border-0"
            title="Preview"
          />
        </div>
      )}

      {/* Main scrollable content - this will crumble away */}
      <div
        ref={containerRef}
        className={`h-full overflow-x-scroll overflow-y-hidden relative ${isCrumbling ? 'z-50 crumble-container' : 'z-30'}`}
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        <div className="h-full flex relative" style={{ width: '200vw' }}>
          {/* Left Section */}
          <section
            className="h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 relative"
            style={{ width: '50vw', scrollSnapAlign: 'start' }}
          >
            {/* Full Caully Logo - visible when on left section */}
            <div 
              className="w-96 h-96"
              style={{ 
                backgroundImage: `url(${CaullyLogo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            <button
              onClick={() => scrollToSection(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-48 overflow-hidden hover:brightness-110 transition group"
              style={{ 
                backgroundImage: `url(${CaullyLogo})`,
                backgroundSize: '384px 384px',
                backgroundPosition: 'left center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </section>

          {/* Center Section */}
          <section
            className="h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 flex-shrink-0 relative"
            style={{ width: '100vw', scrollSnapAlign: 'start' }}
          >
            <button
              onClick={() => scrollToSection(0)}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-96 w-48 overflow-hidden hover:brightness-110 transition group"
              style={{ 
                backgroundImage: `url(${CaullyLogo})`,
                backgroundSize: '384px 384px',
                backgroundPosition: 'right center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            <div className="text-center text-white">
              <h1 className="text-6xl font-bold mb-4">Welcome</h1>
              <p className="text-2xl mb-8">This is your starting point</p>
            </div>

            <button
              onClick={() => scrollToSection(2)}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-96 w-48 overflow-hidden hover:brightness-110 transition group"
              style={{ 
                backgroundImage: `url(${FredLogo})`,
                backgroundSize: '384px 384px',
                backgroundPosition: 'left center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </section>

          {/* Right Section */}
          <section
            className="h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 flex-shrink-0 relative"
            style={{ width: '50vw', scrollSnapAlign: 'start' }}
          >
            {/* Full Fred Logo - visible when on right section */}
            <div 
              className="w-96 h-96"
              style={{ 
                backgroundImage: `url(${FredLogo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />

            <button
              onClick={() => scrollToSection(1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-96 w-48 overflow-hidden hover:brightness-110 transition group"
              style={{ 
                backgroundImage: `url(${FredLogo})`,
                backgroundSize: '384px 384px',
                backgroundPosition: 'right center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}