import React, { useState, useEffect } from 'react';
import { Film } from 'lucide-react';
import MoodDetector from './components/MoodDetector';
import MovieCard from './components/MovieCard';
import WeatherWidget from './components/WeatherWidget';
import { getMovieRecommendations } from './utils/movieRecommendations';
import { initializeFaceDetector } from './utils/moodDetection';

function App() {
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const [movies, setMovies] = useState<any[]>([]);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        await initializeFaceDetector();
      } catch (error) {
        console.error('Failed to initialize face detector:', error);
      } finally {
        setIsInitializing(false);
      }
    }
    init();
  }, []);

  const handleMoodDetected = (mood: string) => {
    setDetectedMood(mood);
    const recommendations = getMovieRecommendations(mood);
    setMovies(recommendations);
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse-slow">
            <Film className="text-purple-600 mx-auto mb-4" size={48} />
          </div>
          <p className="text-gray-600">Initializing MoodFlix...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Film className="text-purple-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">MoodFlix</h1>
            </div>
            <WeatherWidget />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Movies Based on Your Mood
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us recommend the perfect movies for your current emotional state.
            Share how you're feeling or let us detect your mood through your expression.
          </p>
        </div>

        {/* Mood Detector Section */}
        <div className="mb-16">
          <MoodDetector onMoodDetected={handleMoodDetected} />
        </div>

        {/* Movie Recommendations */}
        {detectedMood && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Recommended for your {detectedMood} mood
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} MoodFlix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;