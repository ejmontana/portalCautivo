import React from 'react';
import { Ad } from '../types';

interface AdBannerProps {
  ad: Ad;
  onAdClick: (adId: string) => void;
}

export default function AdBanner({ ad, onAdClick }: AdBannerProps) {
  const handleClick = () => {
    onAdClick(ad.id);
    window.open(ad.targetUrl, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={ad.imageUrl} 
          alt={ad.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{ad.title}</h3>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-600">{ad.description}</p>
        <div className="mt-2 flex justify-between items-center text-sm">
          <span className="text-blue-600">Ver Más →</span>
          <span className="text-gray-500">{ad.clicks} clics</span>
        </div>
      </div>
    </div>
  );
}