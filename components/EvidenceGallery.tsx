import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X, ZoomIn, Calendar, ChevronLeft, ChevronRight, Image as ImageIcon, Grid, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 39 Evidencias Fotográficas de Agosto 2026 - PH Índigo
export const INDIGO_AGOSTO_IMAGES = [
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%281%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%281%29.png",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2810%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2811%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2812%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2813%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2814%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2815%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2816%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2817%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2818%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2819%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%282%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2820%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2821%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2822%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2823%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2824%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2825%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2826%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2827%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2828%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2829%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%283%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2830%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2831%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2832%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2833%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2834%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2835%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2836%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2837%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%2838%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%284%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%285%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%286%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%287%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%288%29.jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_agosto/imagen-indigo-agosto%20%289%29.jpg"
];

const EvidenceGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = INDIGO_AGOSTO_IMAGES;

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null));
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null));
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') setSelectedIndex(null);
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  }, [selectedIndex, handlePrev, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="evidence" className="py-20 bg-slate-50/70 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3.5 bg-indigo-50 border border-indigo-100 rounded-2xl text-indigo-700 mb-4 shadow-xs">
            <Camera size={26} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
            Evidencias Fotográficas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Registro visual detallado de las actividades operativas, atención a la emergencia sísmica, instalación de polisombras, demarcación de seguridad, reparaciones locativas y labores ejecutadas durante el período de <strong>Agosto 2026</strong>.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100/80 text-indigo-900 rounded-full text-xs md:text-sm font-bold shadow-xs">
            <Calendar size={14} className="text-indigo-600" />
            <span>39 Registros Fotográficos — Agosto 2026</span>
          </div>
        </div>

        {/* Dynamic Responsive Image Grid (39 photos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 md:gap-4">
          {images.map((url, idx) => (
            <motion.div 
              key={idx}
              id={`evidence-photo-${idx + 1}`}
              className="group relative overflow-hidden rounded-2xl cursor-zoom-in shadow-xs hover:shadow-xl transition-all duration-300 bg-white border border-gray-200/90 aspect-square"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 8) * 0.03, duration: 0.35 }}
              onClick={() => setSelectedIndex(idx)}
            >
              <img 
                src={url} 
                alt={`Evidencia Fotográfica ${idx + 1} - Conjunto Índigo Agosto 2026`} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-indigo-950/0 group-hover:bg-indigo-950/35 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 backdrop-blur-md p-2.5 rounded-xl text-indigo-950 shadow-md">
                  <ZoomIn size={18} />
                </div>
              </div>
              
              {/* Badge Tag */}
              <div className="absolute bottom-0 left-0 w-full p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between text-white text-[11px] font-bold">
                  <span className="bg-white/25 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px]">#{idx + 1}</span>
                  <span className="text-indigo-200 text-[10px]">Agosto 2026</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal with Carousel Controls */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-gray-950/92 backdrop-blur-md p-4 md:p-8 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              type="button"
              id="btn-close-lightbox"
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-50 focus:outline-none shadow-lg"
              onClick={() => setSelectedIndex(null)}
              aria-label="Cerrar vista previa"
            >
              <X size={26} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              id="btn-prev-lightbox"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/15 hover:bg-white/25 rounded-full p-3 transition-all z-50 focus:outline-none backdrop-blur-sm shadow-xl hover:scale-105"
              onClick={handlePrev}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              id="btn-next-lightbox"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-white/15 hover:bg-white/25 rounded-full p-3 transition-all z-50 focus:outline-none backdrop-blur-sm shadow-xl hover:scale-105"
              onClick={handleNext}
              aria-label="Siguiente foto"
            >
              <ChevronRight size={28} />
            </button>
            
            <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={images[selectedIndex]}
                src={images[selectedIndex]} 
                alt={`Evidencia ampliada ${selectedIndex + 1}`}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/15"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <div className="mt-3 flex items-center gap-3 px-4 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-semibold shadow-md">
                <span className="text-indigo-300 font-bold">Foto {selectedIndex + 1} de {images.length}</span>
                <span className="text-gray-400">•</span>
                <span>Registro fotográfico — Conjunto Residencial Índigo PH (Agosto 2026)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EvidenceGallery;

