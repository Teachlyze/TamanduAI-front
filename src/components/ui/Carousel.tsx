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
        <div
          ref={trackRef}
          className="flex items-center gap-52 will-change-transform p-1"
        >
          {[...feedbacks, ...feedbacks].map((f, idx) => (
            <div
              key={idx}
              className="flex-none w-[90%] sm:w-[500px] bg-white shadow-lg shadow-black/30 rounded-xl p-6"
            >
              <div className="flex items-center justify-between border-b border-yellow-400 pb-2">
                <h4 className="text-lg font-semibold">{f.nome}</h4>
                <div className="flex text-yellow-500 text-xl">
                  {Array.from({ length: f.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-800">{f.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
