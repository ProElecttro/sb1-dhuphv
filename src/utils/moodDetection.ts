import * as tf from '@tensorflow/tfjs';
import * as faceDetection from '@tensorflow-models/face-detection';

let detector: faceDetection.FaceDetector | null = null;

export async function initializeFaceDetector() {
  if (!detector) {
    await tf.setBackend('webgl');
    await tf.ready();

    const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    const detectorConfig = {
      runtime: 'tfjs',
      maxFaces: 1,
      modelType: 'short',
    } as const;
    detector = await faceDetection.createDetector(model, detectorConfig);
  }
  return detector;
}

export async function detectMoodFromImage(imageElement: HTMLImageElement): Promise<string> {
  try {
    const detector = await initializeFaceDetector();
    const faces = await detector.estimateFaces(imageElement, {
      flipHorizontal: false,
      staticImageMode: true,
    });

    if (faces.length === 0) {
      throw new Error('No face detected');
    }

    const face = faces[0];
    const { height, width } = face.box;
    const ratio = height / width;
    const keypoints = face.keypoints;

    if (!keypoints) return 'neutral';

    // Enhanced mood detection using facial keypoints
    const leftEye = keypoints[0];
    const rightEye = keypoints[1];
    const nose = keypoints[2];
    const mouth = keypoints[3];

    // Calculate various facial features
    const eyeDistance = Math.sqrt(
      Math.pow(rightEye.x - leftEye.x, 2) + Math.pow(rightEye.y - leftEye.y, 2)
    );
    const mouthToNoseDistance = Math.sqrt(
      Math.pow(mouth.x - nose.x, 2) + Math.pow(mouth.y - nose.y, 2)
    );
    
    // Enhanced mood classification
    if (mouthToNoseDistance / eyeDistance > 0.4) return 'excited';
    if (mouthToNoseDistance / eyeDistance > 0.3) return 'happy';
    if (mouthToNoseDistance / eyeDistance < 0.2) return 'sad';
    if (ratio > 1.2) return 'energetic';
    if (ratio < 0.9) return 'tired';
    if (Math.abs(leftEye.y - rightEye.y) > 5) return 'confused';
    
    return 'neutral';
  } catch (error) {
    console.error('Error detecting mood:', error);
    return 'neutral';
  }
}

export function analyzeMoodFromText(text: string): string {
  const moodKeywords: Record<string, string[]> = {
    excited: ['excited', 'thrilled', 'ecstatic', 'pumped', 'enthusiastic', 'energized'],
    happy: ['happy', 'joy', 'glad', 'cheerful', 'delighted', 'pleased'],
    romantic: ['romantic', 'love', 'passionate', 'dreamy', 'affectionate'],
    relaxed: ['calm', 'peaceful', 'relaxed', 'chill', 'content', 'serene'],
    sad: ['sad', 'depressed', 'down', 'unhappy', 'miserable', 'gloomy'],
    angry: ['angry', 'furious', 'mad', 'irritated', 'annoyed', 'frustrated'],
    scared: ['scared', 'afraid', 'fearful', 'anxious', 'nervous', 'worried'],
    tired: ['tired', 'exhausted', 'sleepy', 'fatigued', 'drained'],
    confused: ['confused', 'puzzled', 'perplexed', 'uncertain', 'unsure'],
    energetic: ['energetic', 'active', 'dynamic', 'lively', 'vigorous']
  };

  text = text.toLowerCase();
  
  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return mood;
    }
  }
  
  return 'neutral';
}