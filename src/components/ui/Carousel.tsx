// components/FeedbackCarousel.jsx
'use client';
import { useRef, useEffect } from 'react';

export default function FeedbackCarousel({
  feedbacks,
}: {
  feedbacks: { nome: string; feedback: string; stars: number }[];
}) {
  const trackRef = useRef(null as null | HTMLDivElement);

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;
    let animationFrame: number;

    const speed = 1.0; // Velocidade (px/frame)

    function move() {
      position -= speed;
      if (!track) return;
      const width = track.scrollWidth / 2;
      if (Math.abs(position) >= width) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(move);
    }

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex items-center gap-42 will-change-transform py-4">
          {[...feedbacks, ...feedbacks].map((f, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out flex-none shrink-0 w-[90%]
              sm:w-[400px] sm:h-[220px] bg-gray-50 hover:shadow-lg hover:shadow-black/30 rounded-xl p-6"
            >
              <div className="flex items-center justify-between border-b-2 border-yellow-400 pb-2">
                <h4 className="text-xl font-semibold">{f.nome}</h4>
                <div className="flex text-yellow-500 gap-1 text-shadow-lg text-shadow-yellow-800 text-2xl">
                  {Array.from({ length: f.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="py-6 text-gray-800 font-medium text-xl">{f.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
