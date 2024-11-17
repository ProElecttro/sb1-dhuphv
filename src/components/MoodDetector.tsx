import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Camera, MessageSquareText, X } from 'lucide-react';
import { detectMoodFromImage, analyzeMoodFromText } from '../utils/moodDetection';

interface MoodDetectorProps {
  onMoodDetected: (mood: string) => void;
}

export default function MoodDetector({ onMoodDetected }: MoodDetectorProps) {
  const [showWebcam, setShowWebcam] = useState(false);
  const [textMood, setTextMood] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mood = analyzeMoodFromText(textMood);
    onMoodDetected(mood);
    setTextMood('');
  };

  const handleImageCapture = useCallback(async () => {
    try {
      setIsProcessing(true);
      const imageSrc = webcamRef.current?.getScreenshot();
      if (!imageSrc) throw new Error('Failed to capture image');

      const img = new Image();
      img.src = imageSrc;
      await new Promise((resolve) => (img.onload = resolve));

      const mood = await detectMoodFromImage(img);
      onMoodDetected(mood);
      setShowWebcam(false);
    } catch (error) {
      console.error('Error capturing mood:', error);
      onMoodDetected('neutral');
    } finally {
      setIsProcessing(false);
    }
  }, [onMoodDetected]);

  return (
    <div className="w-full max-w-md mx-auto">
      {!showWebcam ? (
        <div className="space-y-4">
          <form onSubmit={handleTextSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={textMood}
                onChange={(e) => setTextMood(e.target.value)}
                placeholder="How are you feeling today?"
                className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 resize-none h-32"
              />
              <MessageSquareText className="absolute right-4 top-4 text-gray-400" size={20} />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Detect Mood from Text
              </button>
              <button
                type="button"
                onClick={() => setShowWebcam(true)}
                className="flex items-center justify-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Camera size={24} className="text-gray-600" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowWebcam(false)}
            className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-lg"
          >
            <X size={20} />
          </button>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              className="w-full"
            />
          </div>
          <button
            onClick={handleImageCapture}
            disabled={isProcessing}
            className={`mt-4 w-full py-3 px-6 rounded-lg transition-colors ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white`}
          >
            {isProcessing ? 'Processing...' : 'Detect Mood from Expression'}
          </button>
        </div>
      )}
    </div>
  );
}