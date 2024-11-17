import React from 'react';
import { Heart } from 'lucide-react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  description: string;
}

export default function MovieCard({ title, imageUrl, rating, year, description }: MovieCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart size={20} className="text-gray-700 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600">{rating}/10</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-2">{year}</p>
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}