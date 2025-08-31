'use client';

import { useState, useEffect } from 'react';

const slides = [
  { id: 1, img: '/mainphoto1.jpeg', alt: '1' },
  { id: 2, img: '/mainphoto2.jpeg', alt: '2' },
  { id: 3, img: '/20240317_215507.jpg', alt: '3' },
  { id: 4, img: '/20240317_193326.jpg', alt: '4' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow bg-white">
      {/* 슬라이드 컨테이너 */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-white"
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* 좌측 버튼 */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 px-3 py-1 rounded-full shadow cursor-pointer"
      >
        ◀
      </button>

      {/* 우측 버튼 */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 px-3 py-1 rounded-full shadow cursor-pointer"
      >
        ▶
      </button>

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
