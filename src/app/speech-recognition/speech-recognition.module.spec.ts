import { SpeechRecognitionModule } from './speech-recognition.module';

describe('SpeechRecognitionModule', () => {
  let speechRecognitionModule: SpeechRecognitionModule;

  beforeEach(() => {
    speechRecognitionModule = new SpeechRecognitionModule();
  });

  it('should create an instance', () => {
    expect(speechRecognitionModule).toBeTruthy();
  });
});
