import React from 'react';
import { Cloud, CloudRain, Sun, Snowflake } from 'lucide-react';

interface WeatherWidgetProps {
  temperature?: number;
  condition?: string;
}

export default function WeatherWidget({ temperature = 20, condition = 'sunny' }: WeatherWidgetProps) {
  const getWeatherIcon = () => {
    switch (condition.toLowerCase()) {
      case 'rainy':
        return <CloudRain className="text-blue-500" size={24} />;
      case 'cloudy':
        return <Cloud className="text-gray-500" size={24} />;
      case 'snowy':
        return <Snowflake className="text-blue-300" size={24} />;
      default:
        return <Sun className="text-yellow-500" size={24} />;
    }
  };

  return (
    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
      {getWeatherIcon()}
      <span className="font-medium">{temperature}°C</span>
    </div>
  );
}